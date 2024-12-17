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

### Analyze the Output
k6 will display real-time results in your terminal:

Example output:
```
running (50s), 00/50 VUs, 10000 complete and 0 interrupted iterations
default ✓ [======================================] 50s  50/50 VUs  0m/s

http_req_duration..........: avg=180ms  min=150ms  med=170ms  max=300ms  
http_req_failed............: 0.00%   ✓ 0       ✗ 10000
http_req_sending...........: avg=0.50ms min=0ms   med=0.45ms max=1ms
http_reqs..................: 10000   200/s
```
Key Metrics:

http_req_duration: The average response time (should be low).
http_req_failed: Percentage of failed requests (should be 0%).
http_reqs: Total number of HTTP requests made.
