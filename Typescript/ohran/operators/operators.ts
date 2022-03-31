
export function addOperator(): number {
  return 2 + (3 + 7) + 23;
}

export function subOperator(): number {
  return 2 - (3 - (7 - 10) - (3 - (5 - 8))) - 23;
}

export function mixedOperators(): number {
  return (2 + 2) * 2;
}

export function addStrOperator(): string {
  return "Test " + "A";
}

/**
 * Mod operator returns division leftover.
 *
 * 10 % 3 = 1
 * 9 % 2 = 1
 * 15 % 4 = 3
 * 16 % 4 = 0
 */
export function modOperator(): number {
  return 10 % 3;
}

export function division(): number {
  return 20 / 9;
}

export function negate(): boolean {
  return !false;
}

export function assignmentOperator(): number {
  /**
   *   <left> = <right>
   *   <destination> = <expression>
   */

  let a: number = 4 + 7 * 2;
  a = a * 2;

  return a;
}

export function shorthandOperators(): number {
  let a: number = 10;

  a += 10;  // a = a + 10;
  a -= 5;   // a = a - 5;
  a *= 20;  // a = a * 20;

  a++;       // a = a + 1;  => increment operator
  a--;       // a = a - 1;  => decrement operator
  ++a;       // a = a + 1;  => increment operator
  --a;       // a = a - 1;  => decrement operator

  let b: number = 10;
  let c: number = 20;

  b = ++c + ++c; // Reason why not to use increment/decrement unary operators in expressions.

  a*=2;

  let test: number = Math.sqrt(a);
  test *= 2;

  return test;
}

/** Assignments:
 * In case, that sqrt (square root) is needed. Use Math.sqrt(n).
 */

// PERIMETER Calculate the perimeter of: square, rectangle, triangle, circle, ellipsis
export function SquarePerimeter(): number{

  const side: number = 16;

  return side * 4;
}

export function RectanglePerimeter(): number{

  const length: number = 26;

  const width: number = 13;

  return 2 * (length + width);

}

export function EquilateralTrianglePerimeter(): number{

  const sides: number = 12;

  return sides * 3;
}

export function IsoscelesTrianglePerimeter(): number{

  const base: number = 3;

  const side: number = 8;

  return 2 * side + base;
}

export function ScaleneTrianglePerimeter(): number{

  const base: number = 12;

  const highta: number = 14;

  const hightb: number = 11;

  const equally: number = base + highta + hightb;

  return  equally;
}

export function CirclePerimeter(): number{

  const diameter: number = 20;

  const radius: number = diameter / 2;

  return 2 * Math.PI * radius;
}

export function EllipsisPerimeter(): number{

  const milength: number = 12;

  const malength: number = 19;

  const pi: number = 3.14;

  // Math.pow(b, e); Math.pow(milength, 2).
  return 2 * pi* Math.sqrt((milength**2+malength**2)/2);
}

// AREA Calculate the area of: square, rectangle, triangle, circle, polygon (6 sides), ellipsis

export function SquareArea(): number{

  const sides: number = 12;

  return sides ** 2;
}

export function RectangleArea(): number{

  const length: number = 14;

  const width: number = 7;

  return length * width;
}

export function TriangleArea(): number{

  const base: number = 14;

  const hight: number = 10;

  return 1/2 * (base * hight);
}

// Heron's Formula
export function SemiTriangleArea(): number{

  const sidea: number = 12;

  const sideb: number = 14;

  const sidec: number = 16;

  const semiperimeter: number = (sidea + sideb + sidec) / 2;

  return Math.sqrt(semiperimeter* (semiperimeter - sidea) * (semiperimeter - sideb) * (semiperimeter - sidec));
}

export function CircleArea(): number{

  const pi: number = 3.14;

  const diameter: number = 14;

  const radius: number = diameter / 2;

  return pi * radius ** 2;
}

export function PolygonArea(): number{

  const apothem: number = 2.5;
  const perimeter: number = 5;
  const n: number = 4;

  const allperimeter: number = n * perimeter;

  return 1 / 2 * (apothem * allperimeter);
}

export function EllipsisArea(): number{

  const hight: number = 8;

  const width: number = 11;

  const pi: number = 3.14;

  const area: number = pi * hight * width;

  return area;
}

// VOLUME Calculate the volume of: cube, sphere, cylinder, pyramid

export function CubeVolume(): number{

  const sides: number = 6;

  return sides ** 3;
}

export function SphereVolume(): number{

  const pi: number = 3.14;

  const diameter: number = 18;

  const radius: number = diameter / 2;

  return 4 / 3 * (pi * radius ** 3);
}

export function CylinderVolume(): number{

  const pi: number = 3.14;

  const diameter: number = 10;

  const radius: number = diameter / 2;

  const hight: number = 20;

  const volume: number = hight * pi * radius ** 2;

  return volume;
}

export function RegularPyramidVolume(): number{

  const side: number = 7;

  const hight: number = 12;

  return 1 / 3 * hight * side ** 2;
}

export function IrregularPyramidVolume(): number{

  const sidea: number = 4;

  const sideb: number = 7;

  const hight: number = 12;

  const volume: number = 1 / 3 * sidea * sideb * hight;

  return volume;
}
