const triviaData = [
  {
    question: "Which of these best describes Earth's moon?",
    1: "A planet",
    2: "A satellite",
    3: "Space garbage",
    4: "A gas giant",
    details:
      "We call the moon a moon, but what it really is is a satellite. This is something that orbits around a larger object (but not the sun). For example, planet-like objects like moons and asteroids that are caught in orbits of larger planets are all considered satellites.",
    image:
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcL2U0NGI3Yjc4LTUwNGEtNDYzOS1hYjFlLTE2YjI1ZmZjZTJjNC0xMjEwLTY4MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==",
    correct: "2",
  },
  {
    question:
      "Compared to the rest of the moons in our solar system, how big is Earth's moon?",
    1: "5th largest",
    2: "2nd smallest",
    3: "The largest",
    4: "The smallest",
    details:
      "The Earth only has one moon, but Jupiter has around 63 moons! One of Jupiter's moons, named Ganymede, is the largest. Though our moon isn't the largest in the solar system, it is the one that is most important to us.",
    image:
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzRiNzRjYzhiLWFmMzktNGYxNS04NzgwLTRlZWRkZmUwNWFmYS0xMjEwLTY4MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==",
    correct: "1",
  },
  {
    question: "How far away is the moon from Earth (on average) in miles?",
    1: "145,614 miles",
    2: "471,200 miles",
    3: "238,857 miles",
    4: "847,683 miles",
    details:
      "When it comes to figuring out how far away the moon is, scientists used laser technology. The moon gets closer and farther from the Earth as it orbits, so when we discuss the distance to the moon, we generally talk about the average distance.",
    image:
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzMzY2M3NmU4LTUxZTItNGVhZS1hY2VmLTA1Mzk1MWZhYjEzMS0xMjEwLTY4MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==",
    correct: "3",
  },
  {
    question: "How long does it take the moon to orbit Earth?",
    1: "One year",
    2: "One day",
    3: "10.7 days",
    4: "27.3 days",
    details:
      "The lunar cycle is something that most scientists (and women) pay close attention to. This cycle actually creates cycles on Earth as well, including tides and weather. We rely on the moon for quite a lot.",
    image:
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzgzMjRiNDU5LTczZjAtNDlkNS1iNGI2LTFkZmEwMGNjMWIyZi0xMjEwLTY4MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQyMH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==",
    correct: "4",
  },
  {
    question:
      "The moon actually has mountains. Can you name the tallest mountain on the moon?",
    1: "Mons Huygens",
    2: "Mon Querer",
    3: "Mt. Reiner",
    4: "Mt. Aldron",
    details:
      "While the moon has mountains, it doesn't have very large mountains. Mons Huygens is actually only a little over half the size of Mt. Everest, coming in at 4,700 meters tall. That's still one heck of a hike.",
    image:
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzY1YmUxZGM2LTQzZTQtNDhhOC05ZWY2LTg1MGQ4OTk0YjJlNC0xMjEwLTY4MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQyMH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==",
    correct: "1",
  },
  {
    question: "How strong is the moon's gravitational effect?",
    1: "About 17% that of Earth's",
    2: "About 115% that of Earth's",
    3: "About 50% that of Earth's",
    4: "The moon doesn't have gravity.",
    details:
      "While the moon does have a little bit of gravity, it is nothing compared to what we face on Earth. It's only actually around one-fifth of what we feel here. Imagine never worrying about dropping stuff.",
    image:
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcL2MxMDg0Y2I2LTMyYTktNGZiYy04ZmZkLWZjYmUwNjIwM2YwNi0xMjEwLTY4MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==",
    correct: "1",
  },
  {
    question:
      "In what year did the Soviet Union land an unmanned craft on the moon?",
    1: "1979",
    2: "1966",
    3: "1976",
    4: "1961",
    details:
      "The Soviets did beat us to the moon, if we count unmanned vehicles. However, in 1969, United States astronauts landed on the moon and actually set foot on it. Though there are conspiracy theories about this, it is widely accepted that the lunar landing was real.",
    image:
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzg5ZTRkNTYyLTExNDYtNDk3My1iYzFmLWNhMzQwYzA5MjNiNS0xMjEwLTY4MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==",
    correct: "2",
  },
  {
    question:
      "What was the name of the mission that resulted in the first manned moon landing?",
    1: "Copernicus 15",
    2: "Apollo 13",
    3: "Apollo 11",
    4: "Copernicus 12",
    details:
      "Apollo 11 was one of the most important NASA missions ever recorded. It sent men to the moon, and recorded how what they saw there, though skeptics look at the footage and deny its reality.",
    image:
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzY1NGFhMzVmLTg2NzktNGJhYi1hNWZkLWZlMTlhZjBiMjJhOS0xMjEwLTY4MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==",
    correct: "3",
  },
  {
    question: "Why does the moon have so many craters?",
    1: "The moon doesn't have any craters.",
    2: "It attracts comets.",
    3: "It has a hot surface.",
    4: "It doesn't have an atmosphere.",
    details:
      "When it comes to getting hit by objects in space, the Earth actually encounters quite a bit of it. However, our atmosphere protects us from the projectiles. The moon, on the other hand, does not have this protection, and its craters remain because it doesn't deal with a lot of weather.",
    image:
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzczNGVhYzI0LTUzZWItNDc4ZC04Y2Q5LTgzYjU2MmFlYTcyYi0xMjEwLTY4MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==",
    correct: "4",
  },
  {
    question: "What do scientists believe is on the moon?",
    1: "Martians",
    2: "Water",
    3: "A molten core",
    4: "Eclipses",
    details:
      "Yes, scientists do believe that there is a little bit of water on the moon. It isn't enough to start an entire settlement, but it is enough to be noticed. However, there is still a lot of research to be done on this topic.",
    image:
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcL2QyMmUxNTQzLTdmMTgtNDVmOS04NTliLTk2YTZlYmFlYmQwYS0xMjEwLTY4MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==",
    correct: "2",
  },
];

export default triviaData;
