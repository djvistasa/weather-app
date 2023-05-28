interface ITemperatureInDegreesProps {
  temperature: number;
  fontWeight?: number;
  fontSize?: number;
  symbolSize?: number;
  degreeOffset?: number;
  isUpperCase?: boolean;
}

interface IStyledDegreeSymbolProps {
  symbolSize?: number;
  degreeOffset?: number;
}

export type { IStyledDegreeSymbolProps, ITemperatureInDegreesProps };
