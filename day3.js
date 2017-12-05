'use strict'

{
    // Length of a side of the current ring
    const currentRing = idx => (x => x + (1 - x % 2))(Math.ceil(Math.sqrt(idx)))
    const steps = n => {
        const r = currentRing(n)
        const numR = (r - 1) / 2
        const cycle = n - ((r - 2) ** 2)
        const innerOffset = cycle % (r - 1)

        return numR + Math.abs(innerOffset - numR)
    };

    const aSeq = [0, 1, 1, 2, 4, 5, 10, 11, 23, 25]
    const a = idx => {
        if (idx in aSeq) return aSeq[idx]
        aSeq[idx] = a(idx - 1)

        const n = currentRing(idx) - 2 // the largest odd n so that n^2 < i,  or a side of a prev. ring
        const n2 = n ** 2            // end of a previous ring
        const m2 = (n - 2) ** 2      // end of a ring before a prev. one
        const o2 = (n + 2) ** 2      // end of the current ring
        // Sides start after diagonals and end on them
        const placeOnSide = j => (j - n2) % (n + 1)
        // Number of the current side (1..4)
        const side = j => Math.ceil((j - n2) / (n + 1))
        // Go to the diagonal on this side and slide on it 1 step down to the center
        const downDiag = sideNum => m2 + sideNum * (n - 1)

        if (idx === n2 + 1) { // start of a ring
            aSeq[idx] += a(m2 + 1)
        } else if (idx === o2 - 1) { // just before the end of a ring
            aSeq[idx] += a(n2 - 1) + a(n2) + a(n2 + 1)
        } else if (idx === o2) {           // end of a ring
            aSeq[idx] += a(n2) + a(n2 + 1)
        } else if (placeOnSide(idx) === 0) { // on any of the 3 other diagonals
            aSeq[idx] += a(downDiag(side(idx)))
        } else if (placeOnSide(idx) === n) { // before them
            const d = downDiag(side(idx))
            aSeq[idx] += a(d) + a(d - 1)
        } else if (placeOnSide(idx) === 1) { // after them
            const d = downDiag(side(idx - 1))
            aSeq[idx] += a(d) + a(d + 1) + a(idx - 2)
        } else { // just on a side, away from corners
            // Move one step vert./hor. closer to the center
            const j = downDiag(side(idx) - 1) + placeOnSide(idx) - 1
            aSeq[idx] += a(j - 1 === m2 ? n2 : j - 1) + a(j) + a(j + 1)
        }

        return aSeq[idx]
    };

    const  target = 368078
    console.log(`${steps(target)} steps`);

    let [val, idx] = [0, 0];
    while (val < target) val = a(++idx);
    console.log(`a[${idx}] = ${val}`);
}
