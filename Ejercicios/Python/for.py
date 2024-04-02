with open('index.txt', 'w') as f:
    for i in range(870):
        f.write(f"<div class='pixel-{i+1}'></div>\n")
