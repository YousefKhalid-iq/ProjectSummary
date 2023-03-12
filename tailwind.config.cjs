/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      // Primary Colors
      LightRed: 'hsl(0, 100%, 67%)',
      LightRedOp: 'hsla(0, 100%, 67%, 0.05)',
      OrangeyYellow: 'hsl(39, 100%, 56%)',
      OrangeyYellowOp: 'hsla(39, 100%, 56%, 0.05)',
      GreenTeal: 'hsl(166, 100%, 37%)',
      GreenTealOp: 'hsla(166, 100%, 37%, 0.05)',
      CobaltBlue: 'hsl(234, 85%, 45%)',
      CobaltBlueOp: 'hsla(234, 85%, 45%, 0.05)',
  
      // Gradients (Backgrounds, Circles)
      LightSlateBlue: 'hsl(252, 100%, 67%)',
      LightRoyalBlue: 'hsl(241, 81%, 54%)',
  
      VioletBlue: 'hsla(256, 72%, 46%, 1)',
      PersianBlue: 'hsla(241, 72%, 46%, 0)',
  
      // Neutral
      White: 'hsl(0, 0%, 100%)',
      PaleBlue: 'hsl(221, 100%, 96%)',
      PaleBlueOp: 'hsla(221, 100%, 96%, 0.5)',
      LightLavender: 'hsl(241, 100%, 89%)',
      LightLavenderOp: 'hsla(241, 100%, 89%, 0.5)',
      DarkGrayBlue: 'hsl(224, 30%, 27%)',
    },

    extend: {
      gridTemplateColumns: {
        '2cols': 'repeat(2, 1fr)'
      }
    },
  },
  plugins: [],
}
