export interface Position {
  coords: GeolocationCoordinates;
  timestamp?: number;
}

export interface PositionError {
  code: number;
  message: string;
}
