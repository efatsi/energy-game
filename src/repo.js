/**
 * All repo relate configuration lives within this file. Add domains,
 * effects, and configure any repo startup behavior here.
 */
import Microcosm from 'microcosm'

class Repo extends Microcosm {
  // If you have custom default options, this is the place to put them
  static defaults = {}

  // setup() runs right after a Microcosm is instantiated. It is the best
  // place to add domains and effects
  setup() {
    // Adding Domains:
    // http://code.viget.com/microcosm/api/domains.html
    // Adding Effects:
    // http://code.viget.com/microcosm/api/effects.html
  }
}

export default Repo
