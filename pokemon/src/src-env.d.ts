/// <reference types="vite/client" />
//
declare module "*.{svg,png}" {
  const content: string;
  export default content;
}
