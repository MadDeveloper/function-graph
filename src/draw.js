const drawPlanBasics = context => {
  drawAxis(context)
  drawGrid(context)
}

const drawGrid = context => {
}

const drawAxis = context => {
  // x axis
  drawGridLine({
    from: { ...config.plan.center, x: 0 },
    to: { ...config.plan.center, x: config.plan.width },
    context
  })
  context.fillText('𝚡', config.plan.width - 10, config.plan.center.y + 10)

  // y axis
  drawGridLine({
    from: { ...config.plan.center, y: config.plan.height },
    to: { ...config.plan.center, y: 0 },
    context
  })
  context.fillText('y', config.plan.center.x - 10, 10)
}

const drawLine = ({ color, width }) => ({ from, to, context }) => {
  context.beginPath()
  context.moveTo(from.x, from.y)
  context.lineTo(to.x, to.y)
  context.lineWidth = width
  context.strokeStyle = color
  context.stroke()
}

const drawGridLine = drawLine({ ...config.grid.line })

const drawFunction = f => {
  
}
