 this.data = setInterval(() => {
                                const { stateNode: { state: { question, stage, feedback }, props: { client: { question: pquestion } } } } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                                const q = (question || pquestion);
                                try {
                                    if (q.qType != "typing") if (stage !== "feedback" && !feedback) [...document.querySelectorAll(`[class*="answerContainer"]`)][q.answers.map((x, i) => q.correctAnswers.includes(x) ? i : null).filter(x => x != null)[0]]?.click?.();
                                    else document.querySelector('[class*="feedback"]')?.firstChild?.click?.();
                                    else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(q.answers[0])
                                } catch { }
                            }, 50);
