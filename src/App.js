import Container from 'react-bootstrap/Container'
import { Stack, Button } from 'react-bootstrap'

export default function App() {
  return(
    // 'my-4' gives spacing at top of container
    <Container className='my-4'>
      {/* stack is a bootstrap flexbox container */}
      {/* 'mb-4' gives bottom margin more space */}
      <Stack direction="horizontal" gap="2" className="mb-4">
        {/* 'me-auto' aligns heading to far left */}
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
    </Container>
  )
}