// 2026 FIFA World Cup knockout bracket structure.
// Slots use FIFA's official path labels until teams are decided:
//   "1A" = Group A winner, "2B" = Group B runner-up,
//   "3rd A/B/C/D/F" = one of the 8 best third-place teams from those groups.
// Later rounds reference the winner (W##) or loser (L##) of earlier matches.
// Round of 32 runs June 28 - July 3; final is July 19 at MetLife Stadium.

export const KNOCKOUT = {
  r32: [
    { id: "M73", a: "2A", b: "2B" },
    { id: "M74", a: "1E", b: "3rd A/B/C/D/F" },
    { id: "M75", a: "1F", b: "2C" },
    { id: "M76", a: "1C", b: "2F" },
    { id: "M77", a: "1I", b: "3rd C/D/F/G/H" },
    { id: "M78", a: "2E", b: "2I" },
    { id: "M79", a: "1A", b: "3rd C/E/F/H/I" },
    { id: "M80", a: "1L", b: "3rd E/H/I/J/K" },
    { id: "M81", a: "1D", b: "3rd B/E/F/I/J" },
    { id: "M82", a: "1G", b: "3rd A/E/H/I/J" },
    { id: "M83", a: "2K", b: "2L" },
    { id: "M84", a: "1H", b: "2J" },
    { id: "M85", a: "1B", b: "3rd E/F/G/I/J" },
    { id: "M86", a: "1J", b: "2H" },
    { id: "M87", a: "1K", b: "3rd D/E/I/J/L" },
    { id: "M88", a: "2D", b: "2G" },
  ],
  r16: [
    { id: "M89", a: "W74", b: "W77" },
    { id: "M90", a: "W73", b: "W75" },
    { id: "M91", a: "W76", b: "W78" },
    { id: "M92", a: "W79", b: "W80" },
    { id: "M93", a: "W83", b: "W84" },
    { id: "M94", a: "W81", b: "W82" },
    { id: "M95", a: "W86", b: "W88" },
    { id: "M96", a: "W85", b: "W87" },
  ],
  qf: [
    { id: "M97", a: "W89", b: "W90" },
    { id: "M98", a: "W93", b: "W94" },
    { id: "M99", a: "W91", b: "W92" },
    { id: "M100", a: "W95", b: "W96" },
  ],
  sf: [
    { id: "M101", a: "W97", b: "W98" },
    { id: "M102", a: "W99", b: "W100" },
  ],
  final: [{ id: "M104", a: "W101", b: "W102" }],
};

export const THIRD_PLACE = { id: "M103", a: "L101", b: "L102" };

export const ROUNDS = [
  { key: "r32", label: "Round of 32" },
  { key: "r16", label: "Round of 16" },
  { key: "qf", label: "Quarter-finals" },
  { key: "sf", label: "Semi-finals" },
  { key: "final", label: "Final" },
];