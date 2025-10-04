const username=window.prompt("ASSEALMUALEYKUM WEREHMETULUAHI WEBEREKATUHU PLEASE ENTER YOUR NAME:")
alert(`welcome to this simple prayer to do list website ${username}!`)
let fardselatTasks = [
  { id: 1, name: "Fajr", completed: false },
  { id: 2, name: "Dhuhr", completed: false },
  { id: 3, name: "Asr", completed: false },
  { id: 4, name: "Magrib", completed: false },
  { id: 5, name: "Isha", completed: false }
];
let sunnahselatTasks = [
  { id: 1, name: "Fajr", completed: false },
  { id: 2, name: "Dhuhr", completed: false },
  { id: 3, name: "Asr", completed: false },
  { id: 4, name: "Magrib", completed: false },
  { id: 5, name: "Isha", completed: false }
];let zikirTasks = [
  { id: 1, name: "morning zikir", completed: false },
  { id: 2, name: "evening zikir ", completed: false },
  { id: 3, name: "after praying zikir", completed: false },
  { id: 4, name: "special zikir", completed: false },
  { id: 5, name: "Isha", completed: false }
];let ramadanTasks = [
  { id: 1, name: "Fasting", completed: false },
  { id: 2, name: "read qur'an today", completed: false },
  { id: 3, name: "giving charity", completed: false },
  { id: 4, name: "terawih prayer", completed: false },
  { id: 5, name: "dua", completed: false }
];