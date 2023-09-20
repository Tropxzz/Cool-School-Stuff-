 let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        document.querySelector('input[class*="nameInput"]').maxLength = 120; /* 120 is the actual limit */
                        alert("Removed name length limit");
