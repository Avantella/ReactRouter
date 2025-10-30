/** Top-level ForecastJSON document (GeoJSON Feature with MET forecast properties). */
export interface ForecastFeature {
  /** GeoJSON object type — always `"Feature"`. */
  type: 'Feature';
  /** Geographic point (lon, lat, optional altitude in meters). */
  geometry: GeoPoint;
  /** Forecast metadata and the time-stepped forecast data. */
  properties: ForecastProperties;
}

/** GeoJSON Point geometry. */
export interface GeoPoint {
  /** Geometry type — always `"Point"`. */
  type: 'Point';
  /**
   * Position tuple: [longitude, latitude, altitude?].
   * Longitude/latitude in decimal degrees (WGS84). Altitude (meters) is optional.
   */
  coordinates: [number, number, number?];
}

/** Forecast container: metadata + time series. */
export interface ForecastProperties {
  /** Metadata about the forecast set (e.g., last update time and unit map). */
  meta: ForecastMeta;
  /**
   * Time-ordered forecast steps. Each entry is valid for its `time`.
   * May include instantaneous params and aggregated period blocks.
   */
  timeseries: ForecastTimeStep[];
}

/** Metadata describing the dataset and units used. */
export interface ForecastMeta {
  /** RFC 3339/ISO timestamp for when this forecast dataset was generated/updated. */
  updated_at: string;
  /**
   * Map of parameter name → unit string (e.g., "m/s", "°", "mm").
   * Use this to label values in `instant`/`next_*_hours`.
   */
  units: Units;
}

/** Declared units for known (and potentially future) parameters. */
export interface Units {
  /** hPa (hectopascal). */ air_pressure_at_sea_level?: string;
  /** °C. */ air_temperature?: string;
  /** °C. */ air_temperature_max?: string;
  /** °C. */ air_temperature_min?: string;
  /** % (0–100). */ cloud_area_fraction?: string;
  /** % (0–100). */ cloud_area_fraction_high?: string;
  /** % (0–100). */ cloud_area_fraction_low?: string;
  /** % (0–100). */ cloud_area_fraction_medium?: string;
  /** °C. */ dew_point_temperature?: string;
  /** % (0–100). */ fog_area_fraction?: string;
  /** mm (liquid water equivalent). */ precipitation_amount?: string;
  /** mm. */ precipitation_amount_max?: string;
  /** mm. */ precipitation_amount_min?: string;
  /** % (0–100). */ probability_of_precipitation?: string;
  /** % (0–100). */ probability_of_thunder?: string;
  /** % (0–100). */ relative_humidity?: string;
  /** index (dimensionless). */ ultraviolet_index_clear_sky?: string;
  /** degrees (0–360, meteorological). */ wind_from_direction?: string;
  /** m/s. */ wind_speed?: string;
  /** m/s. */ wind_speed_of_gust?: string;
  /**
   * Forward-compat allowance for new parameters. Value is a unit string.
   * Example: { "snow_depth": "cm" }
   */
  [key: string]: string | undefined;
}

/** One forecast step starting at `time`. */
export interface ForecastTimeStep {
  /**
   * RFC 3339/ISO timestamp for this step. For `instant`, values are valid at this instant.
   * For `next_*_hours`, the period begins at this time and spans 1/6/12 hours.
   */
  time: string;
  /** Parameter values available for this timestep. */
  data: ForecastData;
}

/** All parameters that may appear at a single timestep. */
export interface ForecastData {
  /**
   * Instantaneous values (e.g., temp, pressure, wind) valid exactly at `time`.
   * Not all parameters are always present.
   */
  instant?: {
    /** Numeric values observed/forecast at the instant. */
    details: InstantDetails;
  };
  /**
   * Aggregates for the next 1 hour (from `time` → `time + 1h`).
   * Often includes precipitation sums and probabilities + a symbol summary.
   */
  next_1_hours?: PeriodBlock<Next1hDetails>;
  /**
   * Aggregates for the next 6 hours (from `time` → `time + 6h`).
   * Often includes precipitation sums and temperature min/max + a symbol summary.
   */
  next_6_hours?: PeriodBlock<Next6hDetails>;
  /**
   * Aggregates for the next 12 hours (from `time` → `time + 12h`).
   * Typically includes probability and a symbol summary.
   */
  next_12_hours?: PeriodBlock<Next12hDetails>;
}

/** Shared structure for period aggregates (`next_1/6/12_hours`). */
export interface PeriodBlock<TDetails extends object = object> {
  /**
   * Categorical weather symbol summarizing the period,
   * e.g., "cloudy", "partlycloudy_day", "rainshowers_night".
   */
  summary?: {
    /** Symbol code string. Keep as string, or narrow via your own union. */
    symbol_code: SymbolCode;
  };
  /**
   * Numeric period aggregates for the window that begins at the timestep `time`
   * and spans the block length (1h/6h/12h).
   */
  details?: TDetails;
}

/** Instantaneous parameters valid at the exact `time`. */
export interface InstantDetails {
  /** hPa. Sea-level pressure. */ air_pressure_at_sea_level?: number;
  /** °C. Air temperature. */ air_temperature?: number;
  /** % (0–100). Total cloud cover. */ cloud_area_fraction?: number;
  /** % (0–100). High-level cloud cover. */ cloud_area_fraction_high?: number;
  /** % (0–100). Low-level cloud cover. */ cloud_area_fraction_low?: number;
  /** % (0–100). Mid-level cloud cover. */ cloud_area_fraction_medium?: number;
  /** °C. Dew point. */ dew_point_temperature?: number;
  /** % (0–100). Fog cover. */ fog_area_fraction?: number;
  /** % (0–100). Relative humidity. */ relative_humidity?: number;
  /** Index (dimensionless). Clear-sky UV. */ ultraviolet_index_clear_sky?: number;
  /** Degrees (0–360). Wind coming *from* this direction. */ wind_from_direction?: number;
  /** m/s. 10m wind speed. */ wind_speed?: number;
  /** m/s. Max gust speed. */ wind_speed_of_gust?: number;
  /**
   * Forward-compat allowance for new instantaneous parameters.
   * Example: { "sea_temperature": 8.1 }
   */
  [key: string]: number | undefined;
}

/** Period aggregates for the next 1 hour. */
export interface Next1hDetails {
  /** mm. Total precipitation amount in the 1h period. */ precipitation_amount?: number;
  /** mm. Upper bound for precipitation in the 1h period. */ precipitation_amount_max?: number;
  /** mm. Lower bound for precipitation in the 1h period. */ precipitation_amount_min?: number;
  /** % (0–100). Probability of any precipitation. */ probability_of_precipitation?: number;
  /** % (0–100). Probability of thunder. */ probability_of_thunder?: number;
  /**
   * Forward-compat allowance for new 1h aggregates.
   * Example: { "snowfall_amount": 0.3 }
   */
  [key: string]: number | undefined;
}

/** Period aggregates for the next 6 hours. */
export interface Next6hDetails {
  /** °C. Maximum air temperature within the 6h window. */ air_temperature_max?: number;
  /** °C. Minimum air temperature within the 6h window. */ air_temperature_min?: number;
  /** mm. Total precipitation amount in the 6h period. */ precipitation_amount?: number;
  /** mm. Upper bound for precipitation in the 6h period. */ precipitation_amount_max?: number;
  /** mm. Lower bound for precipitation in the 6h period. */ precipitation_amount_min?: number;
  /** % (0–100). Probability of any precipitation. */ probability_of_precipitation?: number;
  /**
   * Forward-compat allowance for new 6h aggregates.
   * Example: { "snowfall_amount": 1.2 }
   */
  [key: string]: number | undefined;
}

/** Period aggregates for the next 12 hours. */
export interface Next12hDetails {
  /** % (0–100). Probability of any precipitation in the 12h period. */ probability_of_precipitation?: number;
  /**
   * Forward-compat allowance for new 12h aggregates.
   * Example: { "precipitation_amount": 4.8 }
   */
  [key: string]: number | undefined;
}

/**
 * Weather symbol string summarizing a period (e.g., "clear_sky", "heavyrain", "snow").
 * You can replace this with a union of your subset if you maintain a list.
 */
export type SymbolCode = string;

/** Convenience alias for the full response object. */
export type LocationForecast = ForecastFeature;
