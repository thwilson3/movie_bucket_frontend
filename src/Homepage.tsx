import { FixedSizeList } from 'react-window'

export default function Homepage(){
return (
    <FixedSizeList
    height={400}
    width={360}
    itemSize={46}
    itemCount={200}
    overscanCount={5}
    >
    {renderRow}
    </FixedSizeList>
)
}