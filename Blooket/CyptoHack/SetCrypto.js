amount = 100000000 // amount here

                        stateNode.setState({ crypto: amount, crypto2: amount });
                        stateNode.props.liveGameController.setVal({
                            path: "c/".concat(stateNode.props.client.name),
                            val: {
                                b: stateNode.props.client.blook,
                                cr: amount
                            }
                        });                        stateNode.setState({ crypto: amount, crypto2: amount });
                        stateNode.props.liveGameController.setVal({
                            path: "c/".concat(stateNode.props.client.name),
                            val: {
                                b: stateNode.props.client.blook,
                                p: stateNode.state.password,
                                cr: amount
                            }
                        });
