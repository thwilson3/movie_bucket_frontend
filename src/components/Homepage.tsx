import { FixedSizeList } from 'react-window'

/** Homepage view for Movie Bucket
 *
 * State: none
 * Props: none
 *
 * App -> Homepage -> BucketList, Navigation
 */
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