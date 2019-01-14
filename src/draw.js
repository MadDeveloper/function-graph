const drawPlanBasics = context => {
  drawAxis(context)
  drawGrid(context)
}

const drawGrid = context => {
}

const drawAxis = context => {
  // font
  context.font = '28px Courier'

  // x axis
  drawGridLine({
    from: { ...config.plan.center, x: 0 },
    to: { ...config.plan.center, x: config.plan.width },
    context
  })
  context.fillText('x', config.plan.width - 30, config.plan.center.y + 30)

  // y axis
  drawGridLine({
    from: { ...config.plan.center, y: config.plan.height },
    to: { ...config.plan.center, y: 0 },
    context
  })
  context.fillText('y', config.plan.center.x - 30, 30)
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
