let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
}); 

function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

}












(() => {
	const fortune = document.querySelector('.fortune');
	const wheel = document.querySelector('.wheel-fortune__active');
	const startButton = document.querySelector('.fortune__button');
	let deg = 0;
	let limit = 0;
  
	const surprises = [
	  {
		id: 1,
		name: 'КОНВЕРТ-1',

	  },
	  {
		id: 2,
		name: 'КОНВЕРТ-2',

	  },
	  {
		id: 3,
		name: 'КОНВЕРТ-3',

	  },
	  {
		id: 4,
		name: 'КОНВЕРТ-4',

	  },
	  {
		id: 5,
		name: 'КОНВЕРТ-5',

	  },
	  {
		id: 6,
		name: 'КОНВЕРТ-6',

	  },
	  {
		id: 7,
		name: 'КОНВЕРТ-7',

	  },
	  {
		id: 8,
		name: 'КОНВЕРТ-8',
		
	  },
	];
  
	const spin = () => {
	  startButton.setAttribute('disabled', 'disabled');
	  deg = Math.floor(5000 + Math.random() * 5000);
	  wheel.style.transition = 'all 10s cubic-bezier(.4,.09,0,1.00)';
	  wheel.style.transform = `rotate(${deg}deg)`;
	  limit += 1;
	};
  
	const createSurprise = (array) => {
	  const surprise = array.map((el) => {
		return `
		<div class="suprise">
		  <div class="suprise-overlay"></div>
		  <div class="suprise__item">
			<div class="suprise__close">X</div>
			<div class="suprise__name">${el.name}</div>
			<div class="suprise__img"><alt=${el.name}></div>
		  </div>
		</div>`;
	  });
  
	  fortune.insertAdjacentHTML(
		'beforeend',
		surprise[Math.floor(Math.random() * surprise.length)]
	  );
  
	  const supriseClose = document.querySelector('.suprise__close');
  
	  supriseClose.addEventListener('click', () => {
		const suprise = document.querySelector('.suprise');
		suprise.remove();
		startButton.removeAttribute('disabled', 'disabled');
	  });
	};
  
	const endAnimation = () => {
	  wheel.style.transition = 'none';
	  const actualDeg = deg % 360;
	  wheel.style.transform = `rotate(${actualDeg}deg)`;
	}
  
	startButton.addEventListener('click', () =>
	  limit <= 2 ? spin() : startButton.setAttribute('disabled', 'disabled')
	);
  
	wheel.addEventListener('transitionend', () => {
	  endAnimation()
	  createSurprise(surprises);
	});
  })();