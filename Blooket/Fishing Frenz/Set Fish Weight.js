  weight = 100000000000 // amount
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState({ weight, weight2: weight });
                        stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}`,
                            val: {
                                b: stateNode.props.client.blook,
                                w: weight,
                                f: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(Math.random() * 9)]
                            }
                        });
