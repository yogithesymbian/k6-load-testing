import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5s', target: 10 }, // Ramp up to 10 users over 5 seconds
    { duration: '10s', target: 20 }, // Hold at 20 users for 10 seconds
    { duration: '5s', target: 0 }, // Ramp down to 0 users
  ],
};

export default function () {
  const res = http.get('http://localhost:3000'); // Update with production URL if needed

  // Check that the response status is 200
  check(res, {
    'Home Page is status 200': (r) => r.status === 200,
    'Response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // Add a small pause between requests
}


