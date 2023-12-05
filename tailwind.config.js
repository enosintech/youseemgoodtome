/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        themePurple : "rgb(59, 7, 100)"
      },
      keyframes: {
        fadeIn : {
          '0%': {opacity: "1"},
          '25%': {opacity: "0.8"},
          '50%' : {opacity: "0.6"},
          '75%' : {opacity: "0.4"},
          '100%' : {opacity: "0.2"}
        },
        colorSwitch : {
          "from" : {
            color: "white"
          },
          "to" : {
            color: "rgb(59, 7, 100)"
          }
        },
        bouncer: {
            "0%" : {
              transform: "translateY(1px)"
            },
            "100%" : {
              transform: "translateY(32px)"
            }
        },
        float: {
          'O%' : {
            transform: "translateY(5%)"
          }, 
          "100%" : {
            transform: "translateY(-5%)"
          }
        }
      },
      animation: {
        "fade" : "fadeIn 3s linear infinite",
        "bouncer" : "bouncer 1s alternate infinite",
        "float"  : "float 1.5s alternate infinite",
        "colorSwitch" : "colorSwitch 1s linear infinite"
      },
      fontFamily: {
        merri : "'Merriweather Sans', sans-serif",
        mic: "'Michroma', sans-serif",
        arch: "'Archivo', sans-serif",
        anton: "'Anton', sans-serif",
        lex: "'Lexend', sans-serif",
        mont: "'Montserrat', sans-serif",
        ds: "'Dancing Script', cursive",
        pac: "'Pacifico', cursive"
      },
      dropShadow: {
        "4xl" : '0 8px 24px rgba(18, 28, 53, 0.1)',
      }
    },
  },
  plugins: [],
}

