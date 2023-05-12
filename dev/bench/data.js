window.BENCHMARK_DATA = {
  "lastUpdate": 1683911552767,
  "repoUrl": "https://github.com/rerun-io/rerun",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "1665677+jprochazk@users.noreply.github.com",
            "name": "Jan Procházka",
            "username": "jprochazk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec8333e6658bc045db358a165e9d91078ccda591",
          "message": "add `run_all.py` (#2046)\n\n* add `run_all.py`\r\n\r\n* Get it running on Python 3.8\r\n\r\n* change `web`/`save` subcommands to args\r\n\r\n* forward `py-run-all` to `scripts/run_all.py`\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>",
          "timestamp": "2023-05-04T20:28:32+02:00",
          "tree_id": "da3e09faac636adf905243fddf8820909f345903",
          "url": "https://github.com/rerun-io/rerun/commit/ec8333e6658bc045db358a165e9d91078ccda591"
        },
        "date": 1683225593347,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2840838,
            "range": "± 51403",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 368,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 262,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 421,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2980914,
            "range": "± 42269",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2560915,
            "range": "± 5965",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 29174062,
            "range": "± 1316493",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123260193,
            "range": "± 1120775",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 156768236,
            "range": "± 1665555",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 312540607,
            "range": "± 2718407",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 190346005,
            "range": "± 981270",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71048794,
            "range": "± 1215465",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 260894186,
            "range": "± 1437333",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 20748967,
            "range": "± 1722281",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4109974,
            "range": "± 161739",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1340782,
            "range": "± 2776",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 31399918,
            "range": "± 1663410",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 734954,
            "range": "± 1834",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7576902,
            "range": "± 108657",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8719232,
            "range": "± 441731",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 221154,
            "range": "± 601",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4943,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 321027,
            "range": "± 2091",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 569104,
            "range": "± 2026",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 211968,
            "range": "± 658",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1949,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 223258,
            "range": "± 669",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2516538032,
            "range": "± 7315883",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1191580,
            "range": "± 15636",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1147023,
            "range": "± 20407",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16429,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26361,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 388264,
            "range": "± 1636",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "256edfb1d8c3016a8d1038fb71270be0d4cb1b08",
          "message": "SDK batching/revamp 3: sunset `PythonSession` (#1985)\n\n* version crossbeam at the workspace level\r\n\r\n* more DataRow size helpers\r\n\r\n* DataTableBatcher\r\n\r\n* lints\r\n\r\n* lints\r\n\r\n* self review\r\n\r\n* don't expose shutdown to make errors impossible\r\n\r\n* doc\r\n\r\n* backport\r\n\r\n* backport\r\n\r\n* introduce RecordingStream\r\n\r\n* sunset PythonSession, introduce global daata RecordStream\r\n\r\n* clean up old stuff from the before time\r\n\r\n* self-review\r\n\r\n* ordered data columns in data tables\r\n\r\n* tests\r\n\r\n* even more tests\r\n\r\n* rogue todo\r\n\r\n* batching is now a reality\r\n\r\n* some extra peace of mind\r\n\r\n* revert\r\n\r\n* lock shenanigans\r\n\r\n* merge shenanigans\r\n\r\n* address PR comments\r\n\r\n* Restore `start_web_viewer_server` functionality\r\n\r\n* clean up\r\n\r\n* per-thread per-recording stateful time tracking\r\n\r\n* just build rows directly, thereby _not_ prevent size computation\r\n\r\n* get_recording_id might return nothing now\r\n\r\n* make a lack of active recording a warn_once situation across both languages and all weird situations\r\n\r\n* not an issue anymore\r\n\r\n---------\r\n\r\nCo-authored-by: Jeremy Leibs <jeremy@rerun.io>",
          "timestamp": "2023-05-04T23:24:23+02:00",
          "tree_id": "37b3743b706c7c87debf44490da708aed1a6a7fa",
          "url": "https://github.com/rerun-io/rerun/commit/256edfb1d8c3016a8d1038fb71270be0d4cb1b08"
        },
        "date": 1683236145402,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2739255,
            "range": "± 50209",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 367,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 265,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 408,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2853465,
            "range": "± 56376",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2467554,
            "range": "± 25020",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 25385009,
            "range": "± 855158",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 107409242,
            "range": "± 1234987",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 139347128,
            "range": "± 1172296",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 277504936,
            "range": "± 2426859",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 172684944,
            "range": "± 1759653",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 58051607,
            "range": "± 2127455",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 230423567,
            "range": "± 2251434",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 18130506,
            "range": "± 692051",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4079150,
            "range": "± 75754",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1325434,
            "range": "± 14204",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 24814775,
            "range": "± 869269",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 727667,
            "range": "± 5790",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7357361,
            "range": "± 131900",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8133427,
            "range": "± 152812",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 217937,
            "range": "± 3358",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4809,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 315668,
            "range": "± 3296",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 565945,
            "range": "± 6736",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 208343,
            "range": "± 3046",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1849,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 217186,
            "range": "± 3112",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2250963934,
            "range": "± 12480639",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1144675,
            "range": "± 15829",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1100490,
            "range": "± 15191",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16193,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 25541,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 374462,
            "range": "± 4323",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d214951f2364512ec2e5d95a0f203b00b750b02",
          "message": "[pure refactor] Move `ViewerContext` & `ComponentUiRegistry` to `viewer_context` (#2047)\n\n* Move ViewerContext and ComponentUiRegistry to re_viewer_context\r\n\r\n* re_viewer_context no longer knows about the default ui\r\n\r\n* doc string fix",
          "timestamp": "2023-05-05T09:17:20+02:00",
          "tree_id": "03986b5725d9588f105a2f714ee654cc25794375",
          "url": "https://github.com/rerun-io/rerun/commit/2d214951f2364512ec2e5d95a0f203b00b750b02"
        },
        "date": 1683271591827,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2832532,
            "range": "± 38455",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 381,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 263,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 434,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2884253,
            "range": "± 19596",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2566801,
            "range": "± 15744",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 25616452,
            "range": "± 793379",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 110328350,
            "range": "± 869001",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 141844134,
            "range": "± 1310305",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 279787504,
            "range": "± 1015483",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 178627967,
            "range": "± 507546",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 59580473,
            "range": "± 995059",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 240376357,
            "range": "± 1147471",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 19022184,
            "range": "± 486204",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4027590,
            "range": "± 41464",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1363021,
            "range": "± 3134",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 25649270,
            "range": "± 712356",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 740567,
            "range": "± 3085",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7558283,
            "range": "± 100741",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8792255,
            "range": "± 397059",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 220458,
            "range": "± 720",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4906,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 316751,
            "range": "± 991",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 562255,
            "range": "± 1512",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 211696,
            "range": "± 704",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1940,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 218841,
            "range": "± 812",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2300742598,
            "range": "± 3793580",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1180275,
            "range": "± 5016",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1146956,
            "range": "± 7599",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16864,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26433,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 388678,
            "range": "± 1252",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "364b40bd3203a6f860658b987fd3618ae18bacfd",
          "message": "Fix incorrect 2D camera for scenes with negative 2D coordinates (#2051)",
          "timestamp": "2023-05-05T10:43:07+02:00",
          "tree_id": "2b0cc0a3768417c4c7a0a70d87e6f02e1a99b0fc",
          "url": "https://github.com/rerun-io/rerun/commit/364b40bd3203a6f860658b987fd3618ae18bacfd"
        },
        "date": 1683276751726,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2808322,
            "range": "± 52909",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 369,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 261,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 415,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2953286,
            "range": "± 51948",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2552198,
            "range": "± 19274",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 29964268,
            "range": "± 1069141",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 121750088,
            "range": "± 1149242",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 154164283,
            "range": "± 2712913",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 307269869,
            "range": "± 4596567",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187768501,
            "range": "± 918209",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 67264897,
            "range": "± 1344784",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 251524187,
            "range": "± 2451953",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 20723598,
            "range": "± 1445354",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4392746,
            "range": "± 259076",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1308161,
            "range": "± 9873",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 28260065,
            "range": "± 2394302",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 730278,
            "range": "± 5307",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7492407,
            "range": "± 186086",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8101214,
            "range": "± 126551",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 213763,
            "range": "± 2785",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4721,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 315567,
            "range": "± 2975",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 555646,
            "range": "± 6326",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 209013,
            "range": "± 2219",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1894,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 214318,
            "range": "± 2613",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2513589589,
            "range": "± 10429078",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1170335,
            "range": "± 17266",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1123249,
            "range": "± 15802",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16220,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 25550,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 380202,
            "range": "± 4785",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c14940b1456249d4c52edf91798c80ec22fdad7",
          "message": "[pure refactor] move data ui to new `re_data_ui` crate (#2048)\n\n* re_data_ui crate setup\r\n\r\n* move all data_ui except tensor to re_data_ui\r\n\r\n* move annotations to re_viewer_context\r\n\r\n* move tensor stats & decode cache to re_viewer_context\r\n\r\n* move gpu bridge to re_viewer_context for the time being\r\n\r\n* move image ui to re_data_ui and re-enable data ui for tensors\r\n\r\n* fix links in readme\r\n\r\n* deduplicate select_hovered_on_click logic again, leaving a comment that it is misplaced\r\n\r\n* minor crate cleanup via cargo machete",
          "timestamp": "2023-05-05T11:54:53+02:00",
          "tree_id": "144cef02700402b4a1d4bb4ea81c8d44cf639830",
          "url": "https://github.com/rerun-io/rerun/commit/6c14940b1456249d4c52edf91798c80ec22fdad7"
        },
        "date": 1683281240301,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3048783,
            "range": "± 171280",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 368,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 262,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 418,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3101468,
            "range": "± 264904",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2576913,
            "range": "± 8557",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 33402612,
            "range": "± 341017",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124386573,
            "range": "± 1190386",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164864353,
            "range": "± 2236031",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 313904168,
            "range": "± 3049571",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 191822862,
            "range": "± 1452322",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74698843,
            "range": "± 784615",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 262303151,
            "range": "± 2138490",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 27496592,
            "range": "± 1104270",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 5535137,
            "range": "± 500180",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1332123,
            "range": "± 20562",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 34658732,
            "range": "± 1827863",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 753538,
            "range": "± 3495",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7958821,
            "range": "± 309644",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 11975869,
            "range": "± 495779",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 221862,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4965,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 328917,
            "range": "± 1540",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 580912,
            "range": "± 3980",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 215361,
            "range": "± 1849",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1942,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 224929,
            "range": "± 1168",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2544750274,
            "range": "± 13983793",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1265681,
            "range": "± 10797",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1149292,
            "range": "± 5733",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16639,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26395,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 388813,
            "range": "± 439",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11aec5e18f922baf61f83831f0449b4ae6839b7e",
          "message": "Fix twice as wide alpha-to-coverage edge on circles, leading to artifacts (#2053)\n\n* Fix twice as wide alpha-to-coverage edge on circles, leading to artifacts\r\n\r\n* rename distance_pixel_difference to feathering_radius",
          "timestamp": "2023-05-05T18:45:54+02:00",
          "tree_id": "c7c21471384209381b79d5d861b855b3935cc460",
          "url": "https://github.com/rerun-io/rerun/commit/11aec5e18f922baf61f83831f0449b4ae6839b7e"
        },
        "date": 1683305851943,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2855501,
            "range": "± 41223",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 369,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 274,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 432,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2988837,
            "range": "± 52270",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2562327,
            "range": "± 12815",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 29857474,
            "range": "± 1320391",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 121982440,
            "range": "± 1019073",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 156347823,
            "range": "± 1256042",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 308571168,
            "range": "± 1600913",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 189852807,
            "range": "± 900427",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71814245,
            "range": "± 784784",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 257750552,
            "range": "± 1337415",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 22003075,
            "range": "± 1132266",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4308720,
            "range": "± 133735",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1302328,
            "range": "± 5222",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 27901835,
            "range": "± 1586223",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 740688,
            "range": "± 2639",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7601582,
            "range": "± 111802",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8449477,
            "range": "± 141627",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 219591,
            "range": "± 1558",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4886,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 320253,
            "range": "± 2253",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 568241,
            "range": "± 5079",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 215394,
            "range": "± 1292",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1902,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 221605,
            "range": "± 1078",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2538555722,
            "range": "± 4643392",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1195288,
            "range": "± 11679",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1150355,
            "range": "± 12329",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16435,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26478,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 387501,
            "range": "± 2084",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c7a1a44659b63fd2ec0f0121d49523484dae77b0",
          "message": "Bugfix: allow hovered items to be clicked to set selection (#2057)",
          "timestamp": "2023-05-05T20:31:57+02:00",
          "tree_id": "677fe421bfc4c98a5dc6f24910d60f0fb79ac7c1",
          "url": "https://github.com/rerun-io/rerun/commit/c7a1a44659b63fd2ec0f0121d49523484dae77b0"
        },
        "date": 1683312185022,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2779975,
            "range": "± 22443",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 368,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 264,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 422,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2891481,
            "range": "± 19962",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2549060,
            "range": "± 10013",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 26726629,
            "range": "± 1207886",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 120803517,
            "range": "± 1321360",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 155606510,
            "range": "± 1537494",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 305794568,
            "range": "± 2716172",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187578240,
            "range": "± 1006793",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 66690797,
            "range": "± 2039429",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 255408121,
            "range": "± 1807807",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 19177205,
            "range": "± 979350",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4019116,
            "range": "± 72989",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1328164,
            "range": "± 6310",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 25880623,
            "range": "± 1145390",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 736548,
            "range": "± 2982",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7467681,
            "range": "± 56238",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8294937,
            "range": "± 113415",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 219694,
            "range": "± 1769",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4968,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 320638,
            "range": "± 1706",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 564805,
            "range": "± 2235",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 212298,
            "range": "± 766",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1908,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 219251,
            "range": "± 1018",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2495163035,
            "range": "± 14610259",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1169819,
            "range": "± 9638",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1148699,
            "range": "± 23801",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16792,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 30273,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 386825,
            "range": "± 2684",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d25f10c41f7b1bca7d570e2b52fc712cbc82ead",
          "message": "Depth offset for lines & points (#2052)\n\n* depth offset for lines & points\r\n\r\n* fix comment typo, rename padding variable",
          "timestamp": "2023-05-08T19:39:22+02:00",
          "tree_id": "40b4310d0fe47ada366529b8164f4f6182f9cb9a",
          "url": "https://github.com/rerun-io/rerun/commit/7d25f10c41f7b1bca7d570e2b52fc712cbc82ead"
        },
        "date": 1683568265485,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2789161,
            "range": "± 48644",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 367,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 262,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 411,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2903382,
            "range": "± 31363",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2500727,
            "range": "± 26091",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 26430155,
            "range": "± 1325416",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 121569767,
            "range": "± 1316413",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 152523054,
            "range": "± 1329034",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 306374529,
            "range": "± 2545598",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187995547,
            "range": "± 1904840",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65945928,
            "range": "± 1908114",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 257164004,
            "range": "± 2860698",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 19021951,
            "range": "± 1121919",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4064499,
            "range": "± 82131",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1350909,
            "range": "± 13025",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 25539277,
            "range": "± 1186003",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 739135,
            "range": "± 4282",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7432937,
            "range": "± 80161",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8295882,
            "range": "± 182602",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 215303,
            "range": "± 2911",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4810,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 321780,
            "range": "± 2938",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 563491,
            "range": "± 6655",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 213399,
            "range": "± 2144",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1907,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 219411,
            "range": "± 2448",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2535739888,
            "range": "± 8489310",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1184945,
            "range": "± 16838",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1124975,
            "range": "± 15748",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16071,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 25676,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 378863,
            "range": "± 4644",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32cc9f6ed189a18240c4af6af55d429bb59c5c3f",
          "message": "Detect, warn and gracefully handle corrupt cells in `lookup_arrow` (#2055)\n\n* Fix crash when clicking on an entity with varying number of components.\r\n`lookup_arrow` called arrow's `slice` which is defined to panic on out of bounds slices.\r\n\r\nexample code that would create such an entity\r\n\r\n```rust\r\n    // And some points in front of the rectangle.\r\n    MsgSender::new(\"2d_layering/points_between_top_and_middle\")\r\n        .with_timepoint(sim_time(1 as _))\r\n        .with_component(\r\n            &(0..256).map(|i| Point2D::new(...).collect::<Vec<_>>(),\r\n        )?\r\n        .with_component(&[DrawOrder(1.51)])?\r\n        .send(rec_stream)?;\r\n```\r\n\r\n* remove silly cast\r\n\r\n* don't let corrupt cell go silently\r\n\r\n---------\r\n\r\nCo-authored-by: Clement Rey <cr.rey.clement@gmail.com>",
          "timestamp": "2023-05-09T09:45:28+02:00",
          "tree_id": "02489ac3e557f3e08417faa4f6fede055b532eec",
          "url": "https://github.com/rerun-io/rerun/commit/32cc9f6ed189a18240c4af6af55d429bb59c5c3f"
        },
        "date": 1683618970371,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2810595,
            "range": "± 14548",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 376,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 266,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 419,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2963519,
            "range": "± 39614",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2567962,
            "range": "± 4257",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 27441461,
            "range": "± 685925",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 109753243,
            "range": "± 740060",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 142505448,
            "range": "± 569773",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 280774085,
            "range": "± 2037811",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177770196,
            "range": "± 804609",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 61165294,
            "range": "± 768155",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 237681499,
            "range": "± 1069643",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 20632918,
            "range": "± 929138",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4218681,
            "range": "± 80639",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1323331,
            "range": "± 11622",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 26912199,
            "range": "± 881566",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 745147,
            "range": "± 2203",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7575048,
            "range": "± 63353",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8300411,
            "range": "± 64506",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 220703,
            "range": "± 490",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4907,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 324425,
            "range": "± 945",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 574008,
            "range": "± 1338",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 208453,
            "range": "± 396",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1904,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 222041,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2295605524,
            "range": "± 4174864",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1181310,
            "range": "± 8087",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1141581,
            "range": "± 11921",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16901,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26397,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 387583,
            "range": "± 1940",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4dbd4bbb12b5fd36e092bd49177c8a2b358a619a",
          "message": "Introduce (2D) Draw order component (#2056)\n\n* create depth offset from draw order and patch it through\r\n\r\n* transparent layers now know about depth offset - only images on the same layer will be made transparent\r\n\r\n* add some points to layering demo\r\n\r\n* comments and renames on draw order constants\r\n\r\n* doc & sample details\r\n\r\n* images with a shared root & an explicit draw order all go to the same space view now\r\n\r\n* formatting",
          "timestamp": "2023-05-09T12:57:07+02:00",
          "tree_id": "5d1322f8b1fd11e0e691a6357a1e842c1c7b518b",
          "url": "https://github.com/rerun-io/rerun/commit/4dbd4bbb12b5fd36e092bd49177c8a2b358a619a"
        },
        "date": 1683630397764,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2714971,
            "range": "± 37248",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 370,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 258,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 416,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2831291,
            "range": "± 34611",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2481762,
            "range": "± 34040",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 23909631,
            "range": "± 777686",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 106665580,
            "range": "± 1472533",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 142736194,
            "range": "± 1506103",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 272984229,
            "range": "± 2395479",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 172347006,
            "range": "± 2387248",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 55662295,
            "range": "± 1435129",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 231583144,
            "range": "± 6530657",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 17752618,
            "range": "± 583348",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4122777,
            "range": "± 82960",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1335430,
            "range": "± 16215",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 23628946,
            "range": "± 585263",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 721682,
            "range": "± 5139",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7309369,
            "range": "± 81661",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8127734,
            "range": "± 142324",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 216481,
            "range": "± 3300",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4719,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 312868,
            "range": "± 2967",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 560923,
            "range": "± 4882",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 206411,
            "range": "± 1968",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1852,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 218054,
            "range": "± 2534",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2283652085,
            "range": "± 15059590",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1148731,
            "range": "± 15044",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1120906,
            "range": "± 18284",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16184,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26382,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 378992,
            "range": "± 9141",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "697af914164fdd6b0893e538971b215ac49eb5ed",
          "message": "`native_viewer` is now an opt-in feature of the `rerun` library (#2064)\n\nThis improves compile-times for users that use an external rerun binary.\r\n\r\nThe `rerun` binary, on the other hand, now has `native_viewer` as a\r\n_required_ feature.\r\n\r\nIn is an unhappy compromise.\r\n\r\nCloses https://github.com/rerun-io/rerun/issues/1997",
          "timestamp": "2023-05-09T15:14:52+02:00",
          "tree_id": "0e76018881cea1c56b716fd08b77c16c71db983d",
          "url": "https://github.com/rerun-io/rerun/commit/697af914164fdd6b0893e538971b215ac49eb5ed"
        },
        "date": 1683638770952,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2862152,
            "range": "± 74413",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 371,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 261,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 419,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3030800,
            "range": "± 64715",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2568630,
            "range": "± 4379",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 31415017,
            "range": "± 598725",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124069719,
            "range": "± 1002642",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 159581662,
            "range": "± 1899303",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 315774808,
            "range": "± 1989963",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 190719910,
            "range": "± 954843",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74012438,
            "range": "± 637995",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 264411875,
            "range": "± 1388905",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 23371342,
            "range": "± 1384352",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4443221,
            "range": "± 200178",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1342343,
            "range": "± 17588",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 30025123,
            "range": "± 1672945",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 741172,
            "range": "± 2519",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7572141,
            "range": "± 122495",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8580013,
            "range": "± 237580",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 220682,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4932,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 322427,
            "range": "± 2068",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 569399,
            "range": "± 2095",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 210444,
            "range": "± 568",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1933,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 219874,
            "range": "± 1041",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2548034093,
            "range": "± 5411216",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1235382,
            "range": "± 8366",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1144624,
            "range": "± 2099",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16549,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26558,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 387366,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1665677+jprochazk@users.noreply.github.com",
            "name": "Jan Procházka",
            "username": "jprochazk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4c0aba76357c1786f9dfb8cc35d06fd2eda8876",
          "message": "Fix `taplo-cli` failing to install (#2068)\n\n* add `--locked` when installing `taplo-cli`\r\n\r\n* switch to `taiki-e/install-action`",
          "timestamp": "2023-05-09T15:43:26+02:00",
          "tree_id": "3bb20fd87c2414b6901bcbea27a2ed994c90e040",
          "url": "https://github.com/rerun-io/rerun/commit/b4c0aba76357c1786f9dfb8cc35d06fd2eda8876"
        },
        "date": 1683640723328,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3015473,
            "range": "± 161384",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 374,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 262,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 420,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3002022,
            "range": "± 79695",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2463986,
            "range": "± 9662",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 29636472,
            "range": "± 1153223",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123193585,
            "range": "± 1146900",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 154357723,
            "range": "± 1179411",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 308327520,
            "range": "± 1909389",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 190373700,
            "range": "± 1597110",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70121837,
            "range": "± 995918",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 258697307,
            "range": "± 1135250",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 20874049,
            "range": "± 1581535",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4287685,
            "range": "± 275860",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1328675,
            "range": "± 2113",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 28418589,
            "range": "± 1776125",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 735004,
            "range": "± 3488",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7521913,
            "range": "± 66646",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8367317,
            "range": "± 86977",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 238386,
            "range": "± 531",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5068,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 316895,
            "range": "± 2356",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 587328,
            "range": "± 2015",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 210791,
            "range": "± 1082",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1982,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 221885,
            "range": "± 1149",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2463887630,
            "range": "± 4795313",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1282058,
            "range": "± 14223",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1152584,
            "range": "± 6555",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17326,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26389,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 388090,
            "range": "± 709",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1665677+jprochazk@users.noreply.github.com",
            "name": "Jan Procházka",
            "username": "jprochazk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "78c99361cb52cafe2c8894ab9ff9e58cef1763e5",
          "message": "Check `examples/python/requirements.txt` in CI (#2063)\n\n* add `check_requirements.py`\r\n\r\n* add `check_requirements.py` to CI checks\r\n\r\n* add missing requirements\r\n\r\nsorted alphabetically\r\n\r\n* check if requirements are sorted\r\n\r\nalso intentionally submit incorrect `requirements.txt` so that CI fails\r\n\r\n* fix `examples/python/requirements.txt`",
          "timestamp": "2023-05-09T16:05:17+02:00",
          "tree_id": "62fef205ecf2e918b06e98dea437d45ab4e1889c",
          "url": "https://github.com/rerun-io/rerun/commit/78c99361cb52cafe2c8894ab9ff9e58cef1763e5"
        },
        "date": 1683641962406,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2860818,
            "range": "± 52194",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 370,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 263,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 424,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3363934,
            "range": "± 144343",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2475447,
            "range": "± 7835",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 30259094,
            "range": "± 377644",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 113745694,
            "range": "± 923766",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 148516876,
            "range": "± 1130608",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 289437271,
            "range": "± 1682362",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177972980,
            "range": "± 886743",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62645868,
            "range": "± 729724",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239982130,
            "range": "± 1181317",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 23286916,
            "range": "± 920331",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4461472,
            "range": "± 215300",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1304446,
            "range": "± 3443",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 30455345,
            "range": "± 1261951",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 744429,
            "range": "± 2623",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7803496,
            "range": "± 198317",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8999856,
            "range": "± 401000",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 239314,
            "range": "± 467",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5121,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 322445,
            "range": "± 1490",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 588856,
            "range": "± 2335",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 213046,
            "range": "± 859",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1987,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 223069,
            "range": "± 910",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2252563525,
            "range": "± 9172464",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1267641,
            "range": "± 13701",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1148953,
            "range": "± 6323",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16879,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26655,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 388146,
            "range": "± 598",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb02dfab89c70d500fac730608a209bb24ad6794",
          "message": "`RecordingStream`: automatic `log_tick` timeline (#2072)\n\n* RecordingStream: automatic log_tick timeline (per-recording, per-process)\r\n\r\n* adjust default timeline heuristics to account for 'log_tick'\r\n\r\n* use our timeline constants everywhereg\r\n\r\n* timeless-ness shenanigans\r\n\r\n* more docs\r\n\r\n* issue",
          "timestamp": "2023-05-09T18:13:06+02:00",
          "tree_id": "e299ee6e6a13542efc1d2819e99e55df7ff454b6",
          "url": "https://github.com/rerun-io/rerun/commit/fb02dfab89c70d500fac730608a209bb24ad6794"
        },
        "date": 1683649538936,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2794182,
            "range": "± 28887",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 370,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 263,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 420,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2901490,
            "range": "± 9944",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2463924,
            "range": "± 2021",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 26794020,
            "range": "± 1065204",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 112016318,
            "range": "± 760652",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 140926200,
            "range": "± 617313",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 284757288,
            "range": "± 1192953",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180486951,
            "range": "± 880878",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 59012250,
            "range": "± 1232583",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239139973,
            "range": "± 1261230",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 19926872,
            "range": "± 910522",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4063721,
            "range": "± 80294",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1318010,
            "range": "± 1520",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 26675130,
            "range": "± 900596",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 736126,
            "range": "± 1961",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7621324,
            "range": "± 66251",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8317113,
            "range": "± 121792",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 237462,
            "range": "± 17964",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4981,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 317816,
            "range": "± 1375",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 583374,
            "range": "± 1289",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 210730,
            "range": "± 568",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1990,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 220587,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2242522431,
            "range": "± 7563783",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1207687,
            "range": "± 9048",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1135702,
            "range": "± 1704",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16692,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26486,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 387431,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0a1429eb90810efaf96e6990d4a94be283bb1652",
          "message": "Use the same RRD encoding for the SDK comms as for everything else (#2065)\n\n* Use the same RRD encoding for the SDK comms as for everything else\r\n\r\nThis comes with two benefits:\r\n* We get nice error messages on version mismatch\r\n* We get compression of the TCP stream\r\n\r\nThere is also a downside: we need to pay for the slow zstd encoding\r\nand decoding.\r\n\r\nCloses https://github.com/rerun-io/rerun/issues/2003\r\n\r\n* Use let-else to reduce rightward drift",
          "timestamp": "2023-05-09T20:01:11+02:00",
          "tree_id": "d43d37078cd368e01d6d026f060a6eb3f2aec954",
          "url": "https://github.com/rerun-io/rerun/commit/0a1429eb90810efaf96e6990d4a94be283bb1652"
        },
        "date": 1683655955666,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3498189,
            "range": "± 69992",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 371,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 263,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 421,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3087424,
            "range": "± 53794",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2468122,
            "range": "± 5169",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 29492657,
            "range": "± 386880",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 112666187,
            "range": "± 886666",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 144078089,
            "range": "± 810045",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 284051038,
            "range": "± 1240887",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177452524,
            "range": "± 729929",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62799285,
            "range": "± 428484",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 241285798,
            "range": "± 7068394",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 20927179,
            "range": "± 856962",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4284373,
            "range": "± 184942",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1323024,
            "range": "± 9450",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 28792995,
            "range": "± 1025174",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 740403,
            "range": "± 4187",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7467227,
            "range": "± 97463",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8459612,
            "range": "± 153820",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 237588,
            "range": "± 756",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5007,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 321688,
            "range": "± 1688",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 584306,
            "range": "± 2829",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 211833,
            "range": "± 824",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1939,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 221184,
            "range": "± 959",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2259351905,
            "range": "± 7547602",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1248238,
            "range": "± 13916",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1154135,
            "range": "± 8964",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16673,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26459,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 387450,
            "range": "± 492",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1665677+jprochazk@users.noreply.github.com",
            "name": "Jan Procházka",
            "username": "jprochazk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca5aa68ab62e2ad507da1c031dae5a47f0d4d141",
          "message": "`run_all.py`: add `--fast`, `--separate`, and `--close` (#2054)\n\n* add `--fast`, `--separate`, and `--close`\r\n\r\n* split `--save` into `--save` + `--load`\r\n\r\n* minor refactoring\r\n\r\n* assert that return code is non-zero when waiting\r\n\r\n* cast to int directly\r\n\r\n* reverse condition for `fast` in `collect_examples`\r\n\r\n* sort cherry-picked examples by name\r\n\r\n* rename `port` to `sdk_port`\r\n\r\n* add descriptions for ports\r\n\r\n* use built `rerun` binary directly + simplify args\r\n\r\n* wait for viewers to start + examples to finish\r\n\r\n* dont start viewer for `--save`\r\n\r\n* add `--quiet` to build commands\r\n\r\n* sleep instead of checking logs\r\n\r\n* capture output and print at the end\r\n\r\n* print what we are waiting for\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>",
          "timestamp": "2023-05-10T07:24:19+02:00",
          "tree_id": "39fa5e543fda481c933e47c61c4076cdfc38b42c",
          "url": "https://github.com/rerun-io/rerun/commit/ca5aa68ab62e2ad507da1c031dae5a47f0d4d141"
        },
        "date": 1683697041509,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2943808,
            "range": "± 63353",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 370,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 270,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 432,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3081913,
            "range": "± 85607",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2465749,
            "range": "± 6788",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 31592048,
            "range": "± 479970",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124115677,
            "range": "± 1036190",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 156682028,
            "range": "± 2485660",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 314779896,
            "range": "± 2080402",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 191199488,
            "range": "± 958557",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71351470,
            "range": "± 686860",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 260637328,
            "range": "± 1324278",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 23841925,
            "range": "± 1216255",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4495416,
            "range": "± 333989",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1318424,
            "range": "± 10509",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 30286888,
            "range": "± 1652554",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 738277,
            "range": "± 3493",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7820715,
            "range": "± 462574",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8913266,
            "range": "± 444943",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 239000,
            "range": "± 511",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4984,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 325110,
            "range": "± 1572",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 584573,
            "range": "± 3275",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 211665,
            "range": "± 1048",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2002,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 224857,
            "range": "± 1010",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2466246472,
            "range": "± 3916637",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1246392,
            "range": "± 20658",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1145651,
            "range": "± 5412",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16504,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26460,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 388156,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6fffd19587e75be0d0aa4d91e094be4561eb722f",
          "message": "Improvements to memory measurements and reporting (#2069)\n\n* guide users towards AccountingAllocator\r\n\r\n* web support\r\n\r\n* Update crates/re_viewer/src/app.rs\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>\r\n\r\n* update memory-stats to 1.1 and always use statm\r\n\r\n* improvements, fallbacks and all sorts of fun\r\n\r\n* Update crates/re_viewer/src/app.rs\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>\r\n\r\n* Update crates/re_viewer/src/app.rs\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>\r\n\r\n* Update crates/re_viewer/src/app.rs\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>\r\n\r\n* typo in suggestion\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>",
          "timestamp": "2023-05-10T09:50:34+02:00",
          "tree_id": "a9de87f9c52df8183a9c7c5d0b1ffccabdc8d69c",
          "url": "https://github.com/rerun-io/rerun/commit/6fffd19587e75be0d0aa4d91e094be4561eb722f"
        },
        "date": 1683705996477,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2879744,
            "range": "± 60391",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 374,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 261,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 428,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3019539,
            "range": "± 77727",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2463793,
            "range": "± 5807",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 29817765,
            "range": "± 511892",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 114012786,
            "range": "± 836662",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 143544656,
            "range": "± 1004591",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 287276586,
            "range": "± 1508452",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 181131075,
            "range": "± 645127",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65061440,
            "range": "± 683015",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 246301430,
            "range": "± 1324227",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 23131136,
            "range": "± 1218926",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4452759,
            "range": "± 264122",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1319728,
            "range": "± 4405",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 28426991,
            "range": "± 1711744",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 742519,
            "range": "± 2938",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7623325,
            "range": "± 250596",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8575741,
            "range": "± 255898",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 238564,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4996,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 325391,
            "range": "± 1361",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 600162,
            "range": "± 2137",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 210929,
            "range": "± 1236",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1958,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 222875,
            "range": "± 652",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2271747249,
            "range": "± 3067947",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1249879,
            "range": "± 11540",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1153491,
            "range": "± 5926",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16718,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26272,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 389662,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f77590032c3c2a3669dbe27898a3a15c7a2bc472",
          "message": "Remove `Clipboard::set_text` (#2078)\n\n* remove Clipboard::set_text\r\n\r\n* remove sole usage",
          "timestamp": "2023-05-10T12:52:23+02:00",
          "tree_id": "73505afad5643de3dd1644656817350107c04237",
          "url": "https://github.com/rerun-io/rerun/commit/f77590032c3c2a3669dbe27898a3a15c7a2bc472"
        },
        "date": 1683716622563,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2806689,
            "range": "± 37459",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 372,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 267,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 422,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2952379,
            "range": "± 44154",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2460193,
            "range": "± 33211",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 29546145,
            "range": "± 939967",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 129049592,
            "range": "± 1069096",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 155727839,
            "range": "± 1126674",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 316245662,
            "range": "± 1577853",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 191277432,
            "range": "± 961479",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72980530,
            "range": "± 1295792",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 262278401,
            "range": "± 1613965",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 21190619,
            "range": "± 1139995",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4210786,
            "range": "± 104840",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1324850,
            "range": "± 4930",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 28338695,
            "range": "± 1101511",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 736586,
            "range": "± 3103",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7501833,
            "range": "± 100404",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8415555,
            "range": "± 142246",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 238586,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5032,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 316081,
            "range": "± 1225",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 586411,
            "range": "± 1829",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 209741,
            "range": "± 588",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1982,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 220967,
            "range": "± 695",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2496523764,
            "range": "± 5349085",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1222775,
            "range": "± 9057",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1141033,
            "range": "± 3765",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16716,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26225,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 387621,
            "range": "± 920",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5319928ea87edb1135b565bd1c74391ac33cb5d3",
          "message": "Add support for f16 tensors (#1449)\n\n* Add support for f16 tensors\r\n* Make half::f16 ndarrays work as well",
          "timestamp": "2023-05-10T13:44:38+02:00",
          "tree_id": "04125867bf244c38c6ecb8a434756e87e5cc4eed",
          "url": "https://github.com/rerun-io/rerun/commit/5319928ea87edb1135b565bd1c74391ac33cb5d3"
        },
        "date": 1683719681146,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2481999,
            "range": "± 2986",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 293,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 203,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 347,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2552715,
            "range": "± 10198",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1608963,
            "range": "± 2051",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 21897627,
            "range": "± 506392",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 114706968,
            "range": "± 562253",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 122186264,
            "range": "± 661182",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 273943913,
            "range": "± 5792322",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 182055848,
            "range": "± 499346",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 51217861,
            "range": "± 417418",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239739746,
            "range": "± 1353959",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 15462554,
            "range": "± 44387",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3005943,
            "range": "± 11197",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1095394,
            "range": "± 5266",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 19770036,
            "range": "± 2770183",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 429915,
            "range": "± 3088",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 6097530,
            "range": "± 46494",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 6612241,
            "range": "± 58528",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 203446,
            "range": "± 570",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4657,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 231147,
            "range": "± 1433",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 453694,
            "range": "± 506",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 192533,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1954,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 195619,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1528431120,
            "range": "± 2299367",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 867102,
            "range": "± 1378",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 932340,
            "range": "± 25940",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 12276,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 23070,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 294230,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3601d2e1aff44fa2cba6d4577fc8960b25a3e1f3",
          "message": "Show tensors shaped [H, W, 1, 1] as images (and more!) (#2075)\n\n* Ignore trailing tensor dimension when determining whether a tensor is an image.\r\nFixes #1871\r\nQuite a bit of nuance to support single channel 1x1 images & line-like images.\r\n\r\n* fix image preview for images other than M x N x C and M x N\r\n\r\n* comment fix\r\n\r\n* better shape_short comment\r\n\r\n* handle empty tensors\r\n\r\n* is_shaped_like_an_image is now defined via image_height_width_channels, improve comment on both\r\n\r\n* any Nx1x... image now now treated as image\r\n\r\n* rename to get_with_image_coords, make it more restrictive\r\n\r\n* tensor_to_gpu height_width_depth utility uses now tensor.image_height_width_channels\r\n\r\n* change behavior of is_vector",
          "timestamp": "2023-05-10T14:20:33+02:00",
          "tree_id": "a8c313caffdfe17b5528b78f6cd2444dd4f74374",
          "url": "https://github.com/rerun-io/rerun/commit/3601d2e1aff44fa2cba6d4577fc8960b25a3e1f3"
        },
        "date": 1683721975686,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2477742,
            "range": "± 3563",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 294,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 212,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 338,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2500881,
            "range": "± 9491",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1616774,
            "range": "± 9552",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 21831148,
            "range": "± 582164",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 120523539,
            "range": "± 1207585",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 125243747,
            "range": "± 1107001",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 287123887,
            "range": "± 1906027",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188520166,
            "range": "± 3998126",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 60390169,
            "range": "± 3386053",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256861193,
            "range": "± 3633924",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 15843261,
            "range": "± 998296",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3117399,
            "range": "± 22817",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1122541,
            "range": "± 12516",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20826175,
            "range": "± 579940",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 434562,
            "range": "± 1540",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 6157104,
            "range": "± 9402",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 6725567,
            "range": "± 152963",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 205187,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4742,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 265894,
            "range": "± 1898",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 489149,
            "range": "± 1449",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 192040,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1908,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 195930,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1608262276,
            "range": "± 7992985",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 889186,
            "range": "± 1691",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 980133,
            "range": "± 1908",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 12301,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 23178,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 298552,
            "range": "± 948",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1665677+jprochazk@users.noreply.github.com",
            "name": "Jan Procházka",
            "username": "jprochazk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d597b295ef2c84899184771c3ce05afe5460409a",
          "message": "print output on sequential run failure (#2079)",
          "timestamp": "2023-05-10T14:55:08+02:00",
          "tree_id": "1c4d875da8a21f6054149ab6bba0b13ad37320d4",
          "url": "https://github.com/rerun-io/rerun/commit/d597b295ef2c84899184771c3ce05afe5460409a"
        },
        "date": 1683724140714,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3450891,
            "range": "± 74610",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 381,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 264,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 421,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3584173,
            "range": "± 62553",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2467384,
            "range": "± 8397",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 26751920,
            "range": "± 1017251",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 112658948,
            "range": "± 877845",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 142274316,
            "range": "± 726572",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 283808625,
            "range": "± 1477802",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180693798,
            "range": "± 1133587",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 60550974,
            "range": "± 1414355",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 237424094,
            "range": "± 1358747",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 20380228,
            "range": "± 1133582",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4102756,
            "range": "± 82474",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1331948,
            "range": "± 7285",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 25420449,
            "range": "± 1048088",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 734507,
            "range": "± 2061",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7553211,
            "range": "± 68670",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8408966,
            "range": "± 108022",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 237380,
            "range": "± 1333",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4900,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 319942,
            "range": "± 3371",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 583291,
            "range": "± 2301",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 213751,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1923,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 220658,
            "range": "± 790",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2250982219,
            "range": "± 7993405",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1277945,
            "range": "± 15638",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1143872,
            "range": "± 2487",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16552,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26433,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 388006,
            "range": "± 598",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8a07293fa12745747022f53c801bbb5ba7b41a",
          "message": "Switch from egui_dock to egui_tiles (#2082)\n\n* Use egui_tile_tree in re_ui\r\n\r\n* Replace egui_dock with egui_tile_tree\r\n\r\n* Just egui_tiles. No _tree. It's cleaner.\r\n\r\n* Tweaks",
          "timestamp": "2023-05-11T09:22:45+02:00",
          "tree_id": "a8e986c3f54abf41878c4302976af9be552e1c2b",
          "url": "https://github.com/rerun-io/rerun/commit/bd8a07293fa12745747022f53c801bbb5ba7b41a"
        },
        "date": 1683790483821,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2461907,
            "range": "± 10989",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 289,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 205,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 329,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2492003,
            "range": "± 13504",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1616811,
            "range": "± 21629",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 22054958,
            "range": "± 571607",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 116216776,
            "range": "± 977282",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 122157912,
            "range": "± 1429227",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 273007920,
            "range": "± 2984443",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 182228949,
            "range": "± 1117495",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 50931905,
            "range": "± 572894",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 240002597,
            "range": "± 1334583",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 15509269,
            "range": "± 111181",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 2958998,
            "range": "± 36349",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1091916,
            "range": "± 23710",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 19861616,
            "range": "± 84571",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 433415,
            "range": "± 1368",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 6115310,
            "range": "± 45855",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 6604419,
            "range": "± 30393",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 203854,
            "range": "± 810",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4759,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 257735,
            "range": "± 800",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 483896,
            "range": "± 1320",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 190967,
            "range": "± 2390",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1884,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 194828,
            "range": "± 851",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1545614489,
            "range": "± 13198358",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 863982,
            "range": "± 13913",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 944626,
            "range": "± 5591",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 12292,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 22875,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 294368,
            "range": "± 2962",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8bc674183798ff9d8b35bcb2fe3cc70f32c79141",
          "message": "Python SDK: Add rr.version() (#2084)",
          "timestamp": "2023-05-11T10:55:01+02:00",
          "tree_id": "62f05dc9b3cf757218744b7bf9f8d24f1febb5ed",
          "url": "https://github.com/rerun-io/rerun/commit/8bc674183798ff9d8b35bcb2fe3cc70f32c79141"
        },
        "date": 1683796167996,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3374465,
            "range": "± 65937",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 370,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 266,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 424,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3510135,
            "range": "± 93751",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2455519,
            "range": "± 21481",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 29249745,
            "range": "± 995702",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 112982589,
            "range": "± 943713",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 143033320,
            "range": "± 2344641",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 284643492,
            "range": "± 1320736",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180232011,
            "range": "± 867952",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 61477342,
            "range": "± 698475",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 241428692,
            "range": "± 1115015",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 21559013,
            "range": "± 1222690",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4262466,
            "range": "± 213615",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1321239,
            "range": "± 6374",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 27518452,
            "range": "± 1136956",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 733885,
            "range": "± 3752",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7638940,
            "range": "± 373256",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8441557,
            "range": "± 211772",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 238731,
            "range": "± 667",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4959,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 321191,
            "range": "± 1458",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 588029,
            "range": "± 3767",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 215016,
            "range": "± 978",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1918,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 220432,
            "range": "± 948",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2246122513,
            "range": "± 4609689",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1270381,
            "range": "± 10692",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1143383,
            "range": "± 3006",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16852,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26289,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 387428,
            "range": "± 3182",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ae501b008cc7f42f99cf11e6020530aff9fbde3",
          "message": "Make RecordingId a string (#2088)\n\nThis gives us more flexibility using non-uuid types for Recording Ids. We use this in #2010 where we want to start using the app-id as the recording id for the default blueprint.",
          "timestamp": "2023-05-11T14:58:49+02:00",
          "tree_id": "b6e27d5e9fe4eabc50070439d8346fd05fc6ea68",
          "url": "https://github.com/rerun-io/rerun/commit/1ae501b008cc7f42f99cf11e6020530aff9fbde3"
        },
        "date": 1683810616528,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3471563,
            "range": "± 157927",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 369,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 262,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 420,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3505537,
            "range": "± 30519",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2410488,
            "range": "± 22691",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 27647049,
            "range": "± 1274570",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 111731278,
            "range": "± 728773",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 141000503,
            "range": "± 1036271",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 283132108,
            "range": "± 1452632",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 179647808,
            "range": "± 1331896",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 57405936,
            "range": "± 1646700",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 235497933,
            "range": "± 2034323",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 18390915,
            "range": "± 785589",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4016978,
            "range": "± 57522",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1294653,
            "range": "± 8450",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 23490847,
            "range": "± 1126824",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 735494,
            "range": "± 4968",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7375538,
            "range": "± 96949",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8040273,
            "range": "± 106722",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 233227,
            "range": "± 3683",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4716,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 305953,
            "range": "± 3465",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 575578,
            "range": "± 7918",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 207741,
            "range": "± 2691",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1830,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 216983,
            "range": "± 2660",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2247946238,
            "range": "± 10534155",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1226104,
            "range": "± 20216",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1105793,
            "range": "± 19472",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15943,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 25435,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 373322,
            "range": "± 5426",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3abd1c1ef66b36649d5d6d65da0bda2da5ef8396",
          "message": "Stop playback when we reach the end of the data (#2085)\n\nPreviously we would get stuck in \"Play\" mode, which is both weird\r\nand wasteful",
          "timestamp": "2023-05-11T19:37:49+02:00",
          "tree_id": "c4edd2eb5720d9b37ab6d34c65467e65246e9ae5",
          "url": "https://github.com/rerun-io/rerun/commit/3abd1c1ef66b36649d5d6d65da0bda2da5ef8396"
        },
        "date": 1683827427624,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3324605,
            "range": "± 262339",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 370,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 264,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 420,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3969816,
            "range": "± 358339",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2479988,
            "range": "± 12849",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 32589570,
            "range": "± 305396",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126338766,
            "range": "± 1191796",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166919649,
            "range": "± 1192225",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 319863683,
            "range": "± 2899678",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 193267948,
            "range": "± 1404059",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72592403,
            "range": "± 767438",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 265049048,
            "range": "± 1954536",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 28161121,
            "range": "± 614411",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 5329339,
            "range": "± 427508",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1355751,
            "range": "± 8589",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 33783569,
            "range": "± 1103827",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 748081,
            "range": "± 3925",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8706515,
            "range": "± 481692",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 9464633,
            "range": "± 494684",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 239520,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5039,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 322186,
            "range": "± 1161",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 597765,
            "range": "± 5924",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 213905,
            "range": "± 1135",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1905,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 222302,
            "range": "± 1401",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2486600296,
            "range": "± 10457734",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1273980,
            "range": "± 20161",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1142635,
            "range": "± 8218",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16976,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26379,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 388233,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f7e83dececf949e357b844848026404eb8b25b81",
          "message": "Optimize GLTF/GLB texture loading in debug builds (#2096)",
          "timestamp": "2023-05-12T09:42:01+02:00",
          "tree_id": "94a342df9cc62672582573e63073666cf6f31a76",
          "url": "https://github.com/rerun-io/rerun/commit/f7e83dececf949e357b844848026404eb8b25b81"
        },
        "date": 1683878029883,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2787487,
            "range": "± 28487",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 374,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 265,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 421,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2912904,
            "range": "± 27373",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2427699,
            "range": "± 18385",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 26080001,
            "range": "± 1242397",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123694036,
            "range": "± 1266082",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153019330,
            "range": "± 894185",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 307258801,
            "range": "± 1916811",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 190837797,
            "range": "± 1005352",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 67720364,
            "range": "± 1716826",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 260880038,
            "range": "± 1838778",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 18449361,
            "range": "± 618317",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4060598,
            "range": "± 61956",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1392701,
            "range": "± 6730",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 25237009,
            "range": "± 1002672",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 732513,
            "range": "± 2938",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7578871,
            "range": "± 69781",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8189644,
            "range": "± 64278",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 236367,
            "range": "± 1671",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5099,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 314279,
            "range": "± 1486",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 576442,
            "range": "± 3598",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 211160,
            "range": "± 1275",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1901,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 218139,
            "range": "± 1308",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2489825377,
            "range": "± 4713905",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1230335,
            "range": "± 8987",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1133947,
            "range": "± 7854",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16889,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26088,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 385323,
            "range": "± 3543",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51e703f05743d3a1389c280fd04eb22901fbd1db",
          "message": "Premultiply alpha of RGBA u8 images (#2095)\n\n* Premultiply alpha of RGBA u8 images\r\n\r\n* Explain why we premul on CPU",
          "timestamp": "2023-05-12T10:25:05+02:00",
          "tree_id": "294b6d838550ff4eb4e473b25179d28fb5d20654",
          "url": "https://github.com/rerun-io/rerun/commit/51e703f05743d3a1389c280fd04eb22901fbd1db"
        },
        "date": 1683880820828,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2861207,
            "range": "± 516848",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 369,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 263,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 420,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3167598,
            "range": "± 614138",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2473949,
            "range": "± 29560",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 34450202,
            "range": "± 1631883",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 130523044,
            "range": "± 5334369",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 168149063,
            "range": "± 6639528",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 333459853,
            "range": "± 17916443",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 210831432,
            "range": "± 6496515",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 81366924,
            "range": "± 3918762",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 278926348,
            "range": "± 12504173",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 30434722,
            "range": "± 3466852",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4401682,
            "range": "± 1662469",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1315436,
            "range": "± 18323",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 38786068,
            "range": "± 8567468",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 728804,
            "range": "± 16200",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7543154,
            "range": "± 1524240",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8543418,
            "range": "± 1416231",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 240049,
            "range": "± 3524",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5146,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 355269,
            "range": "± 10857",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 616853,
            "range": "± 20828",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 214593,
            "range": "± 7483",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1940,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 232791,
            "range": "± 6423",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2859969993,
            "range": "± 151237758",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1452838,
            "range": "± 121709",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1148217,
            "range": "± 14510",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16921,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26735,
            "range": "± 509",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 399096,
            "range": "± 5884",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4bdad83350640ae35bc441ef9182327d7499a35",
          "message": "Add `Tensor::from_image_file` and `Tensor::from_image_bytes` (#2097)\n\n* Add Tensor::from_image_file and Tensor::from_image_bytes\r\n\r\n* Support PNG in log_image_file\r\n\r\n* remove duplicated cfg\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>\r\n\r\n* Guess format even if extension is unknown\r\n\r\n* Always turn on the \"image\" feature of re_log_types\r\n\r\n* Python SDK: always support PNG images\r\n\r\n---------\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>",
          "timestamp": "2023-05-12T11:13:22+02:00",
          "tree_id": "4f9b12e95d4a5a38230fdd758f8b35d3b71be834",
          "url": "https://github.com/rerun-io/rerun/commit/e4bdad83350640ae35bc441ef9182327d7499a35"
        },
        "date": 1683883606953,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2794243,
            "range": "± 25750",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 371,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 262,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 420,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2918770,
            "range": "± 33555",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2450211,
            "range": "± 4261",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 26189378,
            "range": "± 987169",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125147876,
            "range": "± 1925514",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 156134903,
            "range": "± 515800",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 310815381,
            "range": "± 1421602",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188852974,
            "range": "± 785252",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65871780,
            "range": "± 1549554",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 257386594,
            "range": "± 1394886",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 19202609,
            "range": "± 630673",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4038094,
            "range": "± 57771",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1329059,
            "range": "± 7053",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 24975065,
            "range": "± 789814",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 731955,
            "range": "± 2327",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7620534,
            "range": "± 61849",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8282024,
            "range": "± 42332",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 238027,
            "range": "± 4220",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5064,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 319710,
            "range": "± 1094",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 590010,
            "range": "± 1642",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 212303,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1933,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 217433,
            "range": "± 724",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2464010911,
            "range": "± 2596835",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1252582,
            "range": "± 11589",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1129814,
            "range": "± 18464",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17015,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 26219,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 387721,
            "range": "± 749",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0a19555bfb3083bcec56fe716656c6758368710c",
          "message": "Work around https://github.com/sebcrozet/instant/issues/49 (#2094)\n\n* Work around https://github.com/sebcrozet/instant/issues/49\r\n\r\n* Link to new issue",
          "timestamp": "2023-05-12T16:27:58+02:00",
          "tree_id": "2cadb5786154e30a561f755c972851f3e6b72ca5",
          "url": "https://github.com/rerun-io/rerun/commit/0a19555bfb3083bcec56fe716656c6758368710c"
        },
        "date": 1683902589020,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2792879,
            "range": "± 62099",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 367,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 270,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 408,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2835281,
            "range": "± 39659",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 2388025,
            "range": "± 33642",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 25568480,
            "range": "± 994572",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 121007834,
            "range": "± 1659730",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151813935,
            "range": "± 1285385",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 300889584,
            "range": "± 2370717",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186750824,
            "range": "± 1931272",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65845042,
            "range": "± 1777902",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 253687026,
            "range": "± 2329019",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 18085937,
            "range": "± 1055981",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4132115,
            "range": "± 141718",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1374019,
            "range": "± 15821",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 24673359,
            "range": "± 859278",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 732788,
            "range": "± 5274",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7353996,
            "range": "± 113118",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8108384,
            "range": "± 120312",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 231106,
            "range": "± 2688",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4896,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 313328,
            "range": "± 3039",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 576029,
            "range": "± 7811",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 207848,
            "range": "± 2529",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1820,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 217419,
            "range": "± 2567",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 2478073412,
            "range": "± 9772211",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1221989,
            "range": "± 22014",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1140441,
            "range": "± 5972",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16898,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 25919,
            "range": "± 339",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 380626,
            "range": "± 5374",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "223e0bd1c410c7bd0c07bdba7980ab139253e308",
          "message": "Fix premature pausing when reaching end of still-streaming stream (#2106)\n\n* Fix premature pausing when reaching end of still-streaming stream\r\n* Release channel after first web callback\r\n\r\n---------\r\n\r\nCo-authored-by: Jeremy Leibs <jeremy@rerun.io>",
          "timestamp": "2023-05-12T19:01:24+02:00",
          "tree_id": "54a71e7ecbb62ae5559f3c7c1a466e04a1a387bb",
          "url": "https://github.com/rerun-io/rerun/commit/223e0bd1c410c7bd0c07bdba7980ab139253e308"
        },
        "date": 1683911549587,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2462692,
            "range": "± 14591",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 280,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 204,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 323,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2526594,
            "range": "± 12351",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1617628,
            "range": "± 5707",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 24119730,
            "range": "± 2736323",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 121114544,
            "range": "± 1827750",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 131801740,
            "range": "± 2974781",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 287635654,
            "range": "± 3623840",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186678483,
            "range": "± 1902462",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 58318138,
            "range": "± 3031537",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 250383341,
            "range": "± 3213254",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 15999009,
            "range": "± 1827092",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3102065,
            "range": "± 76275",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 1070327,
            "range": "± 40217",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20596000,
            "range": "± 1437570",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 433307,
            "range": "± 1571",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 6110187,
            "range": "± 101732",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 6592754,
            "range": "± 48952",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 207194,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4864,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 260246,
            "range": "± 1157",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 490604,
            "range": "± 1791",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 192171,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1929,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 195743,
            "range": "± 513",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1522629127,
            "range": "± 3990245",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 865135,
            "range": "± 1026",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 943242,
            "range": "± 1187",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 12920,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 23081,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 295266,
            "range": "± 796",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}