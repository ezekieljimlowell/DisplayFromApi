import 'rsuite/dist/rsuite.min.css';
import { Popover, Whisper, Button } from 'rsuite';

export default function PopoverDisplay() {
    return (
        <Whisper
            trigger="click"
            Placement="bottom"
            speaker={<Popover title="Popover Title"><p>I am popover</p></Popover>}
        >
            <Button type="button">Click</Button>
        </Whisper>
    )
}