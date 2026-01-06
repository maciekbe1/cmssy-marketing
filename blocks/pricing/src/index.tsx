import { createRoot, Root } from "react-dom/client";
import Pricing from "./Pricing";
import "./index.css";

interface BlockContext {
  root: Root;
}

export default {
  __component: Pricing,

  mount(element: HTMLElement, props: any): BlockContext {
    const root = createRoot(element);
    root.render(<Pricing content={props} />);
    return { root };
  },

  update(_element: HTMLElement, props: any, ctx: BlockContext): void {
    ctx.root.render(<Pricing content={props} />);
  },

  unmount(_element: HTMLElement, ctx: BlockContext): void {
    ctx.root.unmount();
  },
};
