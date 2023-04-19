'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Carlos Reyes',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
  movementsDates: [
    '2022-01-03T22:14:21.200Z',
    '2022-01-13T17:02:08.728Z',
    '2022-03-02T04:41:36.691Z',
    '2022-04-23T22:07:26.647Z',
    '2022-05-11T15:27:23.742Z',
    '2022-06-16T20:28:09.215Z',
    '2022-11-19T04:57:54.121Z',
    '2022-12-25T23:31:19.232Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const account2 = {
  owner: 'Cesar Vega',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2022-11-08T08:37:25.290Z',
    '2022-01-29T20:52:33.112Z',
    '2022-05-18T16:35:30.564Z',
    '2022-01-14T19:36:23.691Z',
    '2022-12-17T05:23:01.785Z',
    '2022-06-07T10:26:27.387Z',
    '2022-03-16T10:31:12.742Z',
    '2022-07-01T23:31:41.576Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Cristhian Martinez',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2022-12-21T17:29:15.688Z',
    '2022-05-28T13:10:12.921Z',
    '2022-12-01T09:03:37.097Z',
    '2022-05-09T17:18:34.925Z',
    '2022-01-05T23:12:23.188Z',
    '2022-04-05T20:53:30.447Z',
    '2022-02-13T04:32:34.348Z',
    '2022-06-17T15:13:28.502Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const account4 = {
  owner: 'Diego Espinoza',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2022-01-11T04:08:47.947Z',
    '2022-03-25T17:58:26.984Z',
    '2022-05-13T19:15:37.331Z',
    '2022-06-23T00:42:34.036Z',
    '2022-12-22T12:16:02.207Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account5 = {
  owner: 'Charlie Parra',
  movements: [393, -116, -680, 92, -352, 581, 219, 863, -514, 1000],
  interestRate: 1,
  pin: 5555,
  movementsDates: [
    '2022-01-22T19:36:39.387Z',
    '2022-02-06T17:22:11.886Z',
    '2022-03-15T05:16:48.610Z',
    '2022-04-09T02:11:02.219Z',
    '2022-04-28T14:36:53.803Z',
    '2022-06-07T08:34:08.767Z',
    '2022-07-08T22:37:08.168Z',
    '2022-11-20T02:02:16.210Z',
    '2022-12-10T19:19:12.315Z',
    '2022-07-01T19:18:30.384Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account6 = {
  owner: 'Alexander Moscoa',
  movements: [-748, -84, 100, 1500, -407, -953, -997, -904, -782, -444],
  interestRate: 1,
  pin: 6666,
  movementsDates: [
    '2022-01-27T14:53:17.377Z',
    '2022-02-11T05:13:37.318Z',
    '2022-03-16T15:39:18.567Z',
    '2022-04-08T09:58:32.611Z',
    '2022-05-06T05:38:16.913Z',
    '2022-06-04T05:45:36.381Z',
    '2022-07-11T16:01:12.898Z',
    '2022-11-23T11:10:01.652Z',
    '2022-12-06T00:02:36.945Z',
    '2022-07-07T18:54:13.899Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account7 = {
  owner: 'Steven Sanchez',
  movements: [707, 745, -900, 418, 450, -570, -579, -558, 1500, -463],
  interestRate: 1,
  pin: 7777,
  movementsDates: [
    '2022-01-09T06:03:29.768Z',
    '2022-03-07T09:22:29.387Z',
    '2022-05-23T09:14:27.924Z',
    '2022-06-17T23:44:45.127Z',
    '2022-07-11T22:18:55.904Z',
    '2022-11-24T17:06:22.446Z',
    '2022-12-09T08:59:03.412Z',
    '2022-03-10T23:56:06.382Z',
    '2022-05-31T12:30:11.240Z',
    '2022-06-07T08:34:08.767Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account8 = {
  owner: 'Marlon Barth',
  movements: [-65, -137, -925, -794, 995, -620, -689, 933, 1500, 838],
  interestRate: 1,
  pin: 8888,
  movementsDates: [
    '2022-01-09T15:14:07.915Z',
    '2022-02-22T21:23:53.532Z',
    '2022-03-28T13:27:17.791Z',
    '2022-04-10T08:15:30.058Z',
    '2022-05-13T22:34:49.067Z',
    '2022-06-25T07:43:02.701Z',
    '2022-07-09T10:53:39.824Z',
    '2022-11-22T08:07:53.901Z',
    '2022-12-18T23:54:23.184Z',
    '2022-07-09T12:45:11.428Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account9 = {
  owner: 'Wilmer Aguilar',
  movements: [477, -564, -363, 37, -204, 781, 1500, -234, 954, 2000],
  interestRate: 1,
  pin: 9999,
  movementsDates: [
    '2022-12-31T09:15:23.456Z',
    '2022-02-18T08:04:55.345Z',
    '2022-03-21T19:36:10.123Z',
    '2022-04-15T16:08:01.589Z',
    '2022-05-25T22:45:07.381Z',
    '2022-06-14T06:02:35.690Z',
    '2022-06-27T09:35:55.976Z',
    '2022-07-09T12:45:11.428Z',
    '2022-08-01T15:20:05.972Z',
    '2022-08-13T19:41:58.563Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account10 = {
  owner: 'Esteban Mendez',
  movements: [457, -757, 366, -307, 31, -27, -33, 174, -348, 1500],
  interestRate: 1,
  pin: 1000,
  movementsDates: [
    '2022-06-12T09:05:14.928Z',
    '2022-12-28T16:14:40.427Z',
    '2022-02-22T20:53:05.592Z',
    '2022-03-17T06:16:37.900Z',
    '2022-04-20T10:11:03.103Z',
    '2022-05-01T15:29:24.531Z',
    '2022-06-18T11:25:47.463Z',
    '2022-07-25T17:45:33.227Z',
    '2022-08-15T18:07:42.774Z',
    '2022-08-26T08:12:52.978Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account11 = {
  owner: 'Liuben Morales',
  movements: [-321, 771, -1500, -289, -155, 860, 719, -329, 458, 590],
  interestRate: 1,
  pin: 2020,
  movementsDates: [
    '2022-01-02T09:11:08.371Z',
    '2022-01-10T14:23:22.810Z',
    '2022-02-06T21:45:03.101Z',
    '2022-02-21T09:18:12.579Z',
    '2022-03-09T17:28:55.044Z',
    '2022-04-01T07:56:16.997Z',
    '2022-05-12T18:41:27.750Z',
    '2022-06-09T10:37:44.832Z',
    '2022-07-11T22:18:55.904Z',
    '2022-08-06T12:40:26.297Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account12 = {
  owner: 'Jose Soto',
  movements: [934, 975, 1500, -600, -692, -228, -31, -619, -231, 616],
  interestRate: 1,
  pin: 1212,
  movementsDates: [
    '2022-12-05T13:10:29.208Z',
    '2022-01-09T11:32:41.994Z',
    '2022-02-15T22:55:19.376Z',
    '2022-03-21T12:44:33.174Z',
    '2022-04-16T06:01:59.492Z',
    '2022-05-30T08:57:04.140Z',
    '2022-06-26T17:49:14.954Z',
    '2022-07-21T22:04:16.661Z',
    '2022-08-04T18:35:22.433Z',
    '2022-08-28T12:14:32.238Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account13 = {
  owner: 'Carlos A Murillo',
  movements: [-193, -302, -172, 1500, 526, 553, 78, 478, 506, 987],
  interestRate: 1,
  pin: 1313,
  movementsDates: [
    '2022-01-10T08:56:26.579Z',
    '2022-01-14T15:28:36.236Z',
    '2022-02-20T22:17:05.218Z',
    '2022-03-07T19:02:18.236Z',
    '2022-04-03T06:19:14.886Z',
    '2022-05-18T07:21:56.204Z',
    '2022-06-06T17:12:41.071Z',
    '2022-07-05T13:08:03.962Z',
    '2022-08-02T20:31:35.876Z',
    '2022-08-29T12:51:50.736Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};
const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
  account8,
  account9,
  account10,
  account11,
  account12,
  account13,
];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // Decrease 1s
    time--;
  };

  // Set time to 5 minutes
  let time = 300;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
