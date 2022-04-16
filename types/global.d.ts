import * as _impress from 'impress';

import * as _metasql from 'metasql';
import { Database } from 'metasql';

declare global {
  namespace metarhia {
    const metasql: typeof _metasql;
  }

  namespace api {}

  namespace lib {}

  namespace domain {}

  namespace db {
    const pg: Database;
  }
}
