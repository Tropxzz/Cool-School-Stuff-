password = "password here"
let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState({ password });
                        stateNode.props.liveGameController.setVal({
                            path: "c/".concat(stateNode.props.client.name),
                            val: {
                                b: stateNode.props.client.blook,
                                p: password,
                                cr: stateNode.state.crypto
                            }
                        });
