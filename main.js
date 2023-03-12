import './style.css'

document.querySelector('#app').innerHTML = `
<main class="md:flex md:items-center justify-center md:min-h-[90vh]">
<div class=" md:bg-White md:grid md:grid-cols-2cols md:w-[600px] md:m-auto 2xl:w-[1000px] md:rounded-[10%]">
  <div class="bg-gradient-to-b from-LightSlateBlue to-LightRoyalBlue rounded-b-3xl md:rounded-3xl md:w-full md:h-[400px]">
    <p class="text-center text-LightLavender py-4 md:py-6">Your Result</p>
    <div class="bg-gradient-to-b from-VioletBlue to-PersianBlue mt-0 mb-5 mx-auto rounded-[50%] text-center table align-middle py-7 px-9 md:mb-6 md:py-11 md:px-12">
      <h1 class="text-5xl font-extrabold text-White">76</h1>
      <p class="text-sm font-light text-LightLavenderOp">of 100</p>
    </div>
    <h2 class="text-center font-medium text-PaleBlue text-xl">Great</h2>
    <p class="text-center font-light w-64 my-0 mx-auto text-LightLavecnder pt-2 pb-10 text-sm text-LightLavender md:w-48 2xl:w-72">
      You scored higher than 65% of the people who have taken these tests.
    </p>
  </div>
  <div class="w-5/6 my-0 mx-auto py-5 md:bg-White md:w-full rounded-3xl md:h-[400px] md:p-6">
    <h2 class="text-DarkGrayBlue font-bold pb-5">Summary</h2>
    <div class="flex justify-between p-4 bg-LightRedOp rounded-md mb-4 md:p-3">
      <div id="" class="flex gap-2">
        <img class="w-[18px] h-[18px] block m-auto" src="./assets/images/icon-reaction.svg" alt="" role="presentation">
        <p id="react-p" class="text-LightRed text-[0.9em] font-semibold">Reaction</p>
      </div>
      <p class="text-DarkGrayBlue"><span class="font-bold">80</span> / 100</p>
    </div>
    <div class="flex justify-between p-4 bg-OrangeyYellowOp rounded-md mb-4 md:p-3">
      <div class="flex gap-2">
        <img class="w-[18px] h-[18px] block m-auto" src="./assets/images/icon-memory.svg" alt="">
        <p id="memory-p" class="text-OrangeyYellow font-semibold">Memory</p>
      </div>
      <p class="text-DarkGrayBlue"><span class="font-bold">92</span> / 100</p>
    </div>
    <div class="flex justify-between p-4 bg-GreenTealOp rounded-md mb-4 md:p-3">
      <div class="flex gap-2">
        <img class="w-[18px] h-[18px] block m-auto" src="./assets/images/icon-verbal.svg" alt="">
        <p id="verbal-p" class="text-GreenTeal font-semibold">Verbal</p>
      </div>
      <p class="text-DarkGrayBlue"><span class="font-bold">61</span> / 100</p>
    </div>
    <div class="flex justify-between p-4 bg-CobaltBlueOp rounded-md mb-4 md:p-3">
      <div class="flex gap-2">
        <img class="w-[18px] h-[18px] block m-auto" src="./assets/images/icon-visual.svg" alt="">
        <p id="visual-p" class="text-CobaltBlue font-semibold">Visual</p>
      </div>
      <p class="text-DarkGrayBlue"><span class="font-bold">72</span> / 100</p>
    </div>
    <div class="text-center">
      <button id="cntBtn" class="bg-DarkGrayBlue hover:bg-gradient-to-b from-LightSlateBlue to-LightRoyalBlue  text-PaleBlue w-full py-3 rounded-3xl">
        Continue
      </button>
    </div>
  </div>
</div>
</main>
<div class="text-center mt-3 text-sm">
Challenge by <a class="text-CobaltBlue hover:underline" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
Coded by <a class="text-CobaltBlue hover:underline" href="https://github.com/YousefKhalid-iq">Yousef Khalid</a>.
</div>
`