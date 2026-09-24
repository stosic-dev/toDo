// crypto.randomUUID() je ugradjen u browser - nije potrebna uuid biblioteka

const list = document.querySelector<HTMLUListElement>('#list')
const form = document.querySelector('#new-task-form') as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>('#new-task-title')

form?.addEventListener("submit", e => {
  e.preventDefault()

  if(input?.value == "" || input?.value == null) return

  const task = {
    id: crypto.randomUUID(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }
})