                        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        const blooks = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b } }, [['1234']]]).webpack("MDrD").a;
                        if (location.pathname == "/blooks") stateNode.setState({ blookData: Object.keys(blooks).reduce((a, b) => (a[b] = (stateNode.state.blookData[b] || 1), a), {}), allSets: Object.values(blooks).reduce((a, b) => (a.includes(b.set) ? a : a.concat(b.set)), []) });
                        else if (Array.isArray(stateNode.state.unlocks)) stateNode.setState({ unlocks: Object.keys(blooks) });
                        else stateNode.setState({ unlocks: blooks });
