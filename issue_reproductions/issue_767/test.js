const multiline = `This is a multiline string
and I'm interested to see how highlighting works for it.`;

const a = 1;
const completed = true;
const duration = 600;
const startTime = new Date();
let testTimeout;

if (completed) {
    console.log(`Test completed -> ${startTime.toISOString()} -> ${duration / 1000} sec`);
} else {
    if (duration >= DEFAULT_TEST_TIMEOUT) {
        console.log(`Test timeout after ${duration / 1000} sec`);
        testTimeout = true
    }
}

if (true) {
    console.log(`Test completed -> ${startTime.toISOString()} -> ${duration / 1000}
    sec`);
    let b = `lots
    of
    lines
    ""
    "-1"
    `;

} else {
    console.log('looks like we have a problem.');
}

if (completed) {
    console.log(`Test completed -> ${startTime.toISOString()} -> ${duration / 1000} sec`);
} else {
    if (duration >= DEFAULT_TEST_TIMEOUT) {
        console.log(`Test timeout after ${duration / 1000} sec`);
        testTimeout = true
    }
}
