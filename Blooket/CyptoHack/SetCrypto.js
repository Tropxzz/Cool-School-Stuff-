var wpm = parseInt(prompt("How much Crypto do u want??"));

if (isNaN(wpm)) {
  alert("Please enter a valid number. Try again, please.");
} else {
  stateNode.setState({ crypto: wpm, crypto2: wpm });

  stateNode.props.liveGameController.setVal({
    path: "c/" + stateNode.props.client.name,
    val: {
      b: stateNode.props.client.blook,
      p: stateNode.state.password,
      cr: wpm,
    },
  });
}
