import { RelativeUnits,AbsoluteUnits,Expanded, Padding, Column, Container, Text, Colors, EdgeInsets, MainAxisAlignment, CrossAxisAlignment, TextStyle  } from "@luk3d/flutjs/dist/";
import { Scaffold, WindiApp, AppBar } from "@luk3d/flutjs/dist/windiapp/index.js";

/**Basic Flutjs App With Tailwind */


WindiApp({
  title: "Flutjs test",

  home: Scaffold({
    appBar: AppBar({
      backgroundColor: Colors.Blue[500],
      foregroundColor: Colors.Gray[100],
      title: Text("Welcome to Flutjs"),
      elevation: 2,
    }),
    body:  Container({
        child:
          Padding({
            padding: EdgeInsets.all(10),
            child: Column({
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Text("Hello World 2"), Text("🤩", {
                  textStyle: TextStyle({ fontSize: 20 })
                })
              ],
            }),
          }),
      }),
  }),
});