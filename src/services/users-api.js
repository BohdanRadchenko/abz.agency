const screenWidth = document.documentElement.clientWidth;
let count = 5;
if(screenWidth < 768) {
  count = 3
} else {
  count = 6
}
export const URL  = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=3&count=${count}`;
