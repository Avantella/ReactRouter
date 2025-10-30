import { Form, useActionData, useFetcher } from "react-router";
import type { Route } from "./+types/NewsletterPage";
import { GetErrors, NewsletterSchema } from "~/schema/news";


export async function action({ request }: Route.ActionArgs) {
    const data = await request.formData();

    const user = {
        name: data.get("name") as string,
        email: data.get("email") as string
    }

    const validation = NewsletterSchema.safeParse(user)

    //Fake wait time when user presses button: 
    await new Promise((resolve) => setTimeout(resolve, 3000))

    if (!validation.success) {
        const errors = GetErrors(validation.error)
        return { status: 400, errors }
    }

    return { status: 200 }
}

//loader always runs before page has been loaded
//action - can be called by web page and will run on server
//method="get" -> updates url with added info. method="post" -> doesn't update url, needs a place to send the info in the form

// ROUTES - jeg mangler det han har satt opp øverst

export default function NewsletterPage() {
    // const response = useActionData<typeof action>();
    const fetcher = useFetcher<typeof action>()
    const isSubmitting = fetcher.state == "submitting"


    return (
        <main className="p-2 flex-1 flex-col">
            <h1 className="text-2xl mb-5">Newsletter</h1>
            <p>Fill out this form to sign up for our newsletter!</p>
            <fetcher.Form method="post" className="flex flex-col gap-4 p-2" >
                <span className="flex flex-col gap-2">
                    <label>Your name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        className="bg-white text-black max-w-50 p-1" />
                    {fetcher.data?.errors?.fieldErrors.name && (
                        <p className="text-red-500">
                            {fetcher.data.errors.fieldErrors.name.join(", ")}
                        </p>)}
                </span>
                <span className="flex flex-col gap-2">
                    <label>Your email:</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="email"
                        className="bg-white text-black max-w-50 p-1" />
                    {fetcher.data?.errors?.fieldErrors.email && (
                        <p className="text-red-500">
                            {fetcher.data.errors.fieldErrors.email.join(", ")}
                        </p>)}
                </span>
                <button
                    type="submit"
                    className={` 
                        flex items-center p-2 border max-w-50 ${fetcher.data?.status == 200 ? "bg-green-500": "bg-amber-500"} gap-2
                        ${isSubmitting ? "animate-pulse" : ""}
                        `}
                >
                    {isSubmitting && <img src="/favicon.ico" className="size-8 animate-spin"/> }
                    {fetcher.data?.status == 200
                        ? "Thanks for signing up!"
                        : fetcher.state != "idle"
                            ? fetcher.state :
                            "Sign up for our Newsletter"}
                </button>
                {fetcher.data?.status == 200 && (
                    <p className="text-green-400">
                        Form submitted
                    </p>)}

                <pre>{JSON.stringify(fetcher, null, 2)}</pre>
            </fetcher.Form>
        </main >
    )
}