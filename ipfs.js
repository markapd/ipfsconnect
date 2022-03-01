import { create, globSource } from 'ipfs'

const ipfs = await create()

for await (const file of ipfs.addAll(globSource('./docs', '**/*'))) {
  console.log(file)
}

// {
//   path: 'docs/assets/anchor.js',
//   cid: CID('QmVHxRocoWgUChLEvfEyDuuD6qJ4PhdDL2dTLcpUy3dSC2'),
//   size: 15347
// }
// {
//   path: 'docs/assets/bass-addons.css',
//   cid: CID('QmPiLWKd6yseMWDTgHegb8T7wVS7zWGYgyvfj7dGNt2viQ'),
//   size: 232
// }
