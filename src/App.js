import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";


function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/KeepBeating.loader.js",
    dataUrl: "build/KeepBeating.data.unityweb",
    frameworkUrl: "build/KeepBeating.framework.js.unityweb",
    codeUrl: "build/KeepBeating.wasm.unityweb",
  });
  

  return <Unity style={{width:'100%',height:'100%',border:'1px solid black'}} unityProvider={unityProvider} />;
}
export default App;
