![CleanShot 2024-12-17 at 3  41 08@2x](https://github.com/user-attachments/assets/24a392ac-a14f-43f9-9d1a-fd297b4d0ee1)


# k6-load-testing
only for access home page and auth access with codespace github to run it. for demo access click here ( ongoing ) full & free

## codespace
use with github codespace no need to clone

## Install k6
```
sudo apt update && sudo apt install -y gpg && curl https://dl.k6.io/key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/k6-archive-keyring.gpg && echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list && sudo apt update && sudo apt install k6
```

## check version
```
k6 version
```

### usage
```
k6 run home-test.js
```
