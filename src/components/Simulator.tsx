import { useEffect, useMemo, useState } from 'react'

type DocType = 'medical' | 'auto' | 'expense'

const DOC_LABELS: Record<DocType, string> = {
  medical: 'Medical Invoice',
  auto: 'Auto Collision Photo',
  expense: 'Corporate Expense',
}

type LogLine = { t: string; level: 'ok' | 'warn' | 'info'; text: string }

function nowStamp() {
  const d = new Date()
  return d.toISOString().slice(11, 23)
}

export function Simulator() {
  const [docType, setDocType] = useState<DocType>('medical')
  const [strictness, setStrictness] = useState(62)
  const [concurrency, setConcurrency] = useState(24)
  const [logs, setLogs] = useState<LogLine[]>([])
  const [tick, setTick] = useState(0)

  const metrics = useMemo(() => {
    const baseStp =
      docType === 'medical' ? 91.4 : docType === 'auto' ? 87.2 : 93.8
    const stp = Math.max(
      42,
      Math.min(98.5, baseStp - strictness * 0.28 + concurrency * 0.08),
    )
    const latency = Math.max(
      180,
      Math.round(980 - concurrency * 12 + strictness * 4.2 + (docType === 'auto' ? 120 : 0)),
    )
    const block = Math.min(
      38,
      Math.max(1.2, strictness * 0.22 + (docType === 'expense' ? 1.8 : 3.4) - concurrency * 0.04),
    )
    return {
      stp: stp.toFixed(1),
      latency,
      block: block.toFixed(1),
    }
  }, [docType, strictness, concurrency])

  useEffect(() => {
    const seed: LogLine[] = [
      {
        t: nowStamp(),
        level: 'info',
        text: `INIT · ClaimEase Telemetry · doc=${DOC_LABELS[docType]}`,
      },
      {
        t: nowStamp(),
        level: 'ok',
        text: 'OCR · multimodal vision pipeline online · conf≥0.97',
      },
      {
        t: nowStamp(),
        level: 'ok',
        text: 'GNN · fraud graph hydrated · nodes=248,441 edges=1.92M',
      },
    ]
    setLogs(seed)
  }, [docType])

  useEffect(() => {
    const id = window.setInterval(() => {
      setTick((n) => n + 1)
    }, 1600)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    if (tick === 0) return
    const events: Array<Omit<LogLine, 't'>> = [
      {
        level: 'info',
        text: `OCR · extract fields · ICD/amount/seal · ${Math.round(94 + Math.random() * 5)}% conf`,
      },
      {
        level: 'ok',
        text: `STP · risk=${(100 - Number(metrics.block)).toFixed(1)} · route=AUTO_PAY`,
      },
      {
        level: 'warn',
        text: `FRAUD · ring proximity hit · score=${(strictness / 100 + Math.random() * 0.3).toFixed(2)}`,
      },
      {
        level: 'info',
        text: `BATCH · concurrency=${concurrency} · queue_depth=${Math.max(0, 40 - concurrency + Math.floor(Math.random() * 6))}`,
      },
      {
        level: 'ok',
        text: `GNN · duplicate claim scan · blocked=${metrics.block}%`,
      },
      {
        level: 'ok',
        text: `PAYOUT · straight-through transfer scheduled · ${metrics.latency}ms`,
      },
    ]
    const next = events[tick % events.length]
    setLogs((prev) => {
      const line = { ...next, t: nowStamp() }
      return [...prev.slice(-40), line]
    })
  }, [tick, concurrency, metrics.block, metrics.latency, strictness])

  return (
    <section className="section" id="simulator" aria-labelledby="sim-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Live Telemetry</p>
          <h2 id="sim-title">Interactive Claims Telemetry & Fraud Guard Simulator</h2>
          <p>
            Switch document types, tune Fraud Guard strictness and batch concurrency,
            then watch STP rate, adjudication latency, and GNN block signals update in
            real time.
          </p>
        </div>

        <div className="panel simulator">
          <div className="sim-controls">
            <div className="field">
              <label>Document type</label>
              <div className="chips" role="tablist" aria-label="Document type">
                {(Object.keys(DOC_LABELS) as DocType[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    className={`chip ${docType === key ? 'active' : ''}`}
                    onClick={() => setDocType(key)}
                  >
                    {DOC_LABELS[key]}
                  </button>
                ))}
              </div>
            </div>
            <div className="field">
              <div className="range-row">
                <label htmlFor="strictness">Fraud Guard Strictness</label>
                <span>{strictness}</span>
              </div>
              <input
                id="strictness"
                type="range"
                min={10}
                max={95}
                value={strictness}
                onChange={(e) => setStrictness(Number(e.target.value))}
              />
            </div>
            <div className="field">
              <div className="range-row">
                <label htmlFor="concurrency">Batch Concurrency</label>
                <span>{concurrency}</span>
              </div>
              <input
                id="concurrency"
                type="range"
                min={1}
                max={64}
                value={concurrency}
                onChange={(e) => setConcurrency(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="sim-metrics">
            <div className="sim-metric emerald">
              <span>STP Rate</span>
              <strong>{metrics.stp}%</strong>
            </div>
            <div className="sim-metric">
              <span>Adjudication Latency</span>
              <strong>{metrics.latency} ms</strong>
            </div>
            <div className="sim-metric amber">
              <span>Fraud Block Rate</span>
              <strong>{metrics.block}%</strong>
            </div>
          </div>

          <div className="sim-body">
            <div className="doc-preview" aria-hidden="true">
              <div className="eyebrow" style={{ marginBottom: 0 }}>
                {DOC_LABELS[docType]}
              </div>
              <div className="ocr-frame" style={{ inset: '28% 12% 18%' }} />
              <div className="scan-line" />
              <div className="doc-lines">
                <div className={`doc-line ${tick % 3 === 0 ? 'lit' : ''}`} style={{ width: '78%' }} />
                <div className={`doc-line ${tick % 3 === 1 ? 'lit' : ''}`} style={{ width: '92%' }} />
                <div className={`doc-line ${tick % 3 === 2 ? 'lit' : ''}`} style={{ width: '64%' }} />
                <div className="doc-line" style={{ width: '84%' }} />
                <div className="doc-line lit" style={{ width: '55%' }} />
              </div>
              <div className="gauge">
                CONFIDENCE
                <strong>{(96.4 + (tick % 5) * 0.3).toFixed(1)}%</strong>
              </div>
            </div>
            <div className="log" aria-live="polite" aria-label="Fraud and OCR log stream">
              {logs.map((line, idx) => (
                <div key={`${line.t}-${idx}`} className={line.level}>
                  [{line.t}] {line.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
