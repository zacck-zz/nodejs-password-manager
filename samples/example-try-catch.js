try {
  throw new Error('Unable to do the thing');
} catch(e) {
  console.log(e.message)
}
