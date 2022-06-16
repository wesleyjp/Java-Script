const os = require('os');

// Take the first CPU, considering every CPUs have the same specs
// and every NodeJS process only uses one at a time.
const cpus = os.cpus();
const cpu = cpus[0];

// Accumulate every CPU times values
const total = Object.values(cpu.times).reduce(
    (acc, tv) => acc + tv, 0
);

// Normalize the one returned by process.cpuUsage() 
// (microseconds VS miliseconds)
const usage = process.cpuUsage();
const currentCPUUsage = (usage.user + usage.system) * 1000;

// Find out the percentage used for this specific CPU
const perc = Math.round(currentCPUUsage / total); //EDIT: const perc = Math.round(currentCPUUsage / total * 100);

//console.log(`CPU Usage (%): ${perc}`);

export perc