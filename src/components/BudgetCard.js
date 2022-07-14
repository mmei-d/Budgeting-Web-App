import { Card, ProgressBar } from 'react-bootstrap'
import { currencyFormatter } from '../utils'

export default function BudgetCard(props) {
    return (
        <Card>
            <Card.Body>
                <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>
                    <div className='me-2'>{props.name}</div>
                    <div className='d-flex align-items-baseline'>
                        {currencyFormatter.format(props.amount)} 
                        <span className='text-muted fs-6 ms-1'>/ {currencyFormatter.format(props.max)}</span>
                    </div>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}