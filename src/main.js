const initApplication = () => {
  const $plan = document.querySelector('#plan')
  const planContext = getCanvasContext($plan)
  
  setPlanSizes($plan)
  drawPlanBasics(planContext)
}

// start the application once DOM is loaded
window.addEventListener('DOMContentLoaded', initApplication)

const getCanvasContext = $canvas => $canvas.getContext('2d')

const setPlanSizes = $plan => {
  $plan.width = config.plan.width
  $plan.height = config.plan.height
}


