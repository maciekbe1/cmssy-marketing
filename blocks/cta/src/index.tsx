import { createRoot, Root } from "react-dom/client";
import Cta from "./Cta";
import "./index.css";

interface BlockContext {
  root: Root;
}

export default {
  __component: Cta,

  mount(element: HTMLElement, props: any): BlockContext {
    const root = createRoot(element);
    root.render(<Cta content={props} />);
    return { root };
  },

  update(_element: HTMLElement, props: any, ctx: BlockContext): void {
    ctx.root.render(<Cta content={props} />);
  },

  unmount(_element: HTMLElement, ctx: BlockContext): void {
    ctx.root.unmount();
  },
};
