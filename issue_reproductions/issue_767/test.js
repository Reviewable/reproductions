const multiline = `This is a multiline string
and I'm interested to see how highlighting works for it.`;

const a = 1;
const startTime = new Date();
const duration = 600;

if (true) {
    console.log(`Test completed -> ${startTime.toISOString()} -> ${duration / 1000}
    sec`);
    let a = b;
    let b = `
    lots
    of
    lines
    ""
    "-1"
    `;

} else {
    console.log('looks like we have a problem.');
}
