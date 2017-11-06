import PageElement from "./elements/PageElement";
import ClickElement from "./elements/ClickElement";
import TypeElement from "./elements/TypeElement";

const HostConfig = {
  createInstance(type, props, root) {
    switch (type) {
      case "page": {
        return new PageElement(props, root);
      }
      case "type": {
        return new TypeElement(props);
      }
      case "click": {
        return new ClickElement(props);
      }
    }
  },

  appendInitialChild(parentInstance, child) {
    parentInstance.appendInitialChild(child);
  },

  mutation: {
    commitMount(instance, type, newProps) {
      instance.commitMount && instance.commitMount(newProps);
    },

    //  other mutations
    commitUpdate(instance, updatePayload, type, oldProps, newProps) {},
    appendChild(parentInstance, child) {},
    appendChildToContainer(parentInstance, child) {},
    insertBefore(parentInstance, child, beforeChild) {},
    insertInContainerBefore(parentInstance, child, beforeChild) {},
    removeChild(parentInstance, child) {},
    removeChildFromContainer(parentInstance, child) {},
    commitTextUpdate(textInstance, oldText, newText) {}
  },

  createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
    return text;
  },
  finalizeInitialChildren(domElement, type, props) {
    return true;
  },
  getPublicInstance(instance) {
    return instance;
  },
  prepareForCommit() {},
  prepareUpdate(domElement, type, oldProps, newProps) {
    return {};
  },
  resetAfterCommit() {},
  resetTextContent(domElement) {},
  shouldDeprioritizeSubtree(type, props) {
    return false;
  },
  getRootHostContext() {
    return {};
  },
  getChildHostContext() {
    return {};
  },
  shouldSetTextContent(type, props) {
    return (
      typeof props.children === "string" || typeof props.children === "number"
    );
  },
  now: () => {},
  useSyncScheduling: true
};

export default HostConfig;
