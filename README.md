## PT VISA CHECKER

The node.js app check your Portugal visa status

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/yvesroos/pt-visa-status.git
cd pt-visa-status
```
Rename `.env.example` to `.env` and inject your credentials so it looks like this

```
DEBUG=false
LOGIN_VISA=<YOUR PASSPORT NUMBER>
PASS_VISA=<YOUR PASSWORD>
```
```bash
npm start
```