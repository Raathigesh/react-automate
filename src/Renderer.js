import Reconciler from "react-reconciler";
import Container from "./Container";
import HostConfig from "./HostConfig";

const Renderer = Reconciler(HostConfig);

const Reactomate = {
  run(element, callback) {
    const root = Renderer.createContainer(new Container());
    Renderer.updateContainer(element, root, null, callback);
  }
};

export default Reactomate;
